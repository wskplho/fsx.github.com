require 'jekyll'

options = Jekyll.configuration({})
site = Jekyll::Site.new(options)
site.read_posts('')

# Generate tag cloud page
# -----------------------
task :cloud do
    puts 'Generating tag cloud...'

    html =<<-HTML
---
layout: page
title: Tag cloud
---

<p>Click on a tag to see the relevant posts.</p>
HTML

    html << '<p id="tagcloud">'
    site.categories.sort.each do |category, posts|
      font_size = 12 + (posts.count*1.5);
      html << "<a href=\"/tags/#{category}.html\" title=\"Entries tagged #{category} (#{posts.count})\" style=\"font-size: #{font_size}px\">#{category}</a>\n"
    end
    html << '</p>'

    File.open('tags/cloud.html', 'w+') do |file|
      file.puts html
    end

    puts 'Done. File written to: ./tags/cloud.html'
end

# Generate tags page
# ------------------
task :tags do
    puts "Generating tags..."

    site.categories.sort.each do |category, posts|
        html =<<-HTML
---
layout: default
title: Entries tagged "#{category}"
---

        <section class="nice-link-list">
            <header>
                <h1>{{ page.title }}</h1>
            </header>

            <p>Go to the <a href="/tags/cloud.html">tag cloud</a>.</p>

            <ul>
                {% for post in site.categories['#{category}'] %}
                <li><a href="{{ post.url }}"><time datetime="{{ post.date | date: "%Y-%m-%d" }}" pubdate>{{ post.date | date_to_string }}</time> &#187; {{ post.title }}</a></li>
                {% endfor %}
            </ul>
        </section>
HTML

        File.open("tags/#{category}.html", 'w+') do |file|
          file.puts html
        end
    end
    puts 'Done. Files written to: ./tags/'
end

# Generate website
# ----------------
task :taggen => [:cloud, :tags] do
    puts 'Generated tag cloud and all tag pages.'
end

# Generate website
# ----------------
task :generate => [:cloud, :tags] do
    sh 'jekyll'
end

# Optimze/Minimize CSS and JS
# -------------
task :optimize do
    sh 'yuicompressor --type css ./style/screen-uncompressed.css > ./style/screen.css'
    sh 'yuicompressor --type js ./js/jsimgbox2.js > ./js/all.js'
end

# Serve website
# -------------
task :serve do
    sh 'jekyll --server --auto --url http://localhost:4000'
end

# Default
# -------
task :default do
    puts '
Available commands:

 cloud - Generate tag cloud
 tags - Create tag pages
 taggen - Create tag cloud and tag pages
 generate - Generate Jekyll website
 serve - Serve Jekyll website and reload when something is changed

'
end
