require 'jekyll'
require 'digest/md5'

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
      html << "<a href=\"/tags/{{ '#{category}' | hash }}.html\" title=\"Entries tagged #{category} (#{posts.count})\" style=\"font-size: #{font_size}px\">#{category}</a>\n"
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
        hash = (Digest::MD5.hexdigest category)[0..8]
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
HTML

        File.open("tags/#{hash}.html", 'w+') do |file|
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

# Serve website
# -------------
task :serve do
    sh 'jekyll --server --auto'
end
