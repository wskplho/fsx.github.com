---
layout: post
title: Why BBCode?
author: Frank
date: 2011-04-25 13:30:50 +0100
categories: [BBcode, Markdown, Forums]
---

Why is [BBCode][1] used on (almost) all forums? It was initially some kind of safe
form of HTML so the layout of the forum wouldn't be disrupted and their wouldn't
be any danger of XSS attacks, but it is unreadable as hell in its unconverted
form. It's just HTML with square brackets instead of less- and greater-than brackets.

It surprises me that BBCode is still used on forum. There are other lightweight
markup languages that are **much** nicer and are also readable in their unconverted
form. So why not use [Markdown][2], [reStructuredText][3] or [Textile][4] instead?

All of the markup languages I named have implementations in multiple languages (e.g.
Python, PHP, .NET, Ruby, Perl). So let's get rid of this ugly thing, called BBCode.


 [1]: https://secure.wikimedia.org/wikipedia/en/wiki/Bbcode
 [2]: https://secure.wikimedia.org/wikipedia/en/wiki/Markdown
 [3]: https://secure.wikimedia.org/wikipedia/en/wiki/ReStructuredText
 [4]: https://secure.wikimedia.org/wikipedia/en/wiki/Textile_(markup_language)
