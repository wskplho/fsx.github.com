---
layout: page
title: Markdown Document
---

MDD (Markdown Document) is a small variation of Markdown and is used in my
personal documents. It's not really an extension of the syntax, but merely a
piece of [metadata][] or "headers".

These headers are placed at the top of the document and are ended with a single
blank line. A header consists of a indentifier and a value and these two are separated
with a colon, surrounded by two spaces.

Here's a piece of this document.

    Title : Markdown Document
    Date  : Monday March 15th, 2010

    MDD (Markdown Document) is a small variation of Markdown and is used on this website
    and my personal documents. It's not really an extention of the syntax, but merely a
    piece of [metadata][] or "headers".

     [metadata]: http://en.wikipedia.org/wiki/Metadata

As you can see, there are two headers. **Title** and **Date**. On the left side
of the colon you can see the identifier of the headers and on the right the value.

A header can also have a multi-line value.

    Title : Lorem ipsum
    Intro : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            vestibulum massa ut libero dapibus mattis.

    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Here's a Python code example, which can be used to parse a Markdown Document.
Only LF linebreaks are supported in this script. Support for CR+LF and CR
linebreaks can easily be added.

{% highlight python %}
import markdown2

# Markdown2 is used in this case, but any other
# Markdown parser could be used instead
markdowner = markdown2.Markdown(extras=['code-friendly'])

# A function to parse the headers
def parse_mdd_headers(raw_headers):

    headers = {}
    last_header = ''

    for rh in raw_headers.split('\n'):

        rh = rh.split(' : ', 1)
        rh[0] = rh[0].strip()

        if len(rh) > 1:
            headers[rh[0]] = rh[1].strip()
            last_header = rh[0]
        elif last_header:
            headers[last_header] += ' ' + rh[0]

    return headers

# And Markdown Document
mdd_data = '''Title : Markdown Document
Date  : Monday March 15th, 2010

MDD (Markdown Document) is a small variation of Markdown and is used on this website
and my personal documents. It's not really an extention of the syntax, but merely a
piece of [metadata][] or "headers".

 [metadata]: http://en.wikipedia.org/wiki/Metadata'''

# Split document into two parts
headers, content = mdd_data.split('\n\n', 1)

# Parse headers and content
headers = parse_mdd_headers(headers)
content = markdowner.convert(content)

# Output
print headers, '\n'
print content
{% endhighlight %}

This script will output the following when you execute it.

    {'Date': 'Monday March 15th, 2010', 'Title': 'Markdown Document'}

    <p>MDD (Markdown Document) is a small variation of Markdown and is used on this website
    and my personal documents. It's not really an extention of the syntax, but merely a
    piece of <a href="http://en.wikipedia.org/wiki/Metadata">metadata</a> or "headers".</p>


 [metadata]: http://en.wikipedia.org/wiki/Metadata
