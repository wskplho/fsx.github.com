---
layout: post
title: Async Psycopg for Tornado
author: Frank
date: 2011-03-09 15:23:50 +0200
categories: [Tornado, PostgreSQL, Psycopg, Python]
---

Since last week I've been trying to get asynchronous [Psycopg][1] working with
[Tornado][2] after I got some [good help on the mailinglist][3]. I've put the
code in a **[gist on Github][4]**. An example is also included.

This should be considered alpha software since I didn't test it extensively.
And I'll put it in a library when it gets bigger.

Here's a small fragment of an example application:

{% highlight python %}
from async_psycopg2 import Pool

class BaseHandler(tornado.web.RequestHandler):
    @property
    def db(self):
        if not hasattr(self.application, 'db'):
            self.application.db = Pool(1, 20, 10, **{
                'host': 'localhost',
                'database': 'somedatabase',
                'user': 'someuser',
                'password': 'password',
                'async': 1
            })
        return self.application.db

class MainHandler(BaseHandler):
    @tornado.web.asynchronous
    def get(self):
        self.db.execute('SELECT 42, 12, 40, 11;', callback=self._on_response)

    def _on_response(self, cursor):
        self.write('Query results: %s' % cursor.fetchall())
        self.finish()
{% endhighlight %}

I was considering trying to add a way to run multiple asynchronous queries in 
one request, but I'll wait with that untill I need it in the project I'm working
on.


 [1]: http://initd.org/psycopg/
 [2]: http://www.tornadoweb.org/
 [3]: http://groups.google.com/group/python-tornado/browse_thread/thread/56b50ea629baf965
 [4]: https://gist.github.com/861193
