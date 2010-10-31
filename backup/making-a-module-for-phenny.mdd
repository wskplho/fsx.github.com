---
layout: page
title: Making a Module for Phenny
---

<p class="yellow-box">This article was originally posted on
  <a href="http://www.intelliproject.net/articles/showArticle/index/making-an-extra-module-for-phenny">Intelliproject</a>
  by me at 4 December 2008. I've cleaned it up and this copy serves as a backup.
</p>


## Introduction

Phenny is a simple IRC-bot written in Python. And it's not so hard to make an
extra module for it. Basic knowledge of Python is enough for simple modules. In
this article I'm going to explain how to make a simple module, the "kill" module.


## Preparations

**.kill** is supposed to work like this:

 - If user enter **.kill** - The bot replies to the user like "User: You died
   after you saw your website in IE6!"
 - If user enters **.kill 'username'** - The bot says: "'username': You died
   after you saw your website in IE6!"
 - If user enters **.kill 'name of the bot'** - The bot says: "Watch out, boy!! >.>"
 - **.kill** returns a random kill everytime it's called.
 - User can add kills to the database by using **.addkill 'the kill'**.

We're going to store the data in a MySQL database so you need to install
*MySQLdb* first: [http://mysql-python.sourceforge.net/](http://mysql-python.sourceforge.net/)

After you installed MySQLdb you have to install Phenny. Download Phenny from
[http://inamidst.com/phenny/](http://inamidst.com/phenny/) and read README.txt
for the installation instructions.


## The Code

Create a new MySQL databse (e.g. phenny) and import this SQL:

{% highlight sql %}
CREATE TABLE IF NOT EXISTS `kills` (
    `id` int(10) unsigned NOT NULL auto_increment,
    `quote` varchar(255) collate utf8_unicode_ci NOT NULL,
    `approved` tinyint(1) unsigned NOT NULL default '1',
    PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8;

INSERT INTO `kills` (`id`, `quote`, `approved`) VALUES
(1, 'You have been run over by a car!', 1),
(2, 'You fell off a cliff and onto a bread knife!', 1),
(3, 'You got crushed by super marios hammer!', 1),
(4, 'The Grim Reaper has come for you~~~', 1),
(5, 'Your brains have been eaten by a zombie!', 1),
(6, 'You died from drowning in leeches!', 1),
(7, 'You died after you saw your website in IE6!', 1);
{% endhighlight %}

That is the table that contains all the data.

And here is the Python code you need, I have added comments to explain
everything:

{% highlight python %}
#!/usr/bin/env python

"""
kill.py - The Kill Module for Phenny
Copyright 2008, Frank Smit, http://61924.nl/
"""

import sys
import MySQLdb

# Connect to the MySQL database and make a cursor
db = MySQLdb.connect (host='localhost', user='database_user', passwd='database_password', db='database_name')
cursor = db.cursor()

def kill(phenny, input):
    """Returns a random 'You're killed' quote."""

    # Get the input/target from the sender - .kill <target>
    if input.group(2):
        target = input.group(2).strip()
    else:
        target = False

    # Get the random kill from the database
    cursor.execute('SELECT k.quote FROM kills AS k WHERE k.approved=1 ORDER BY RAND() ASC LIMIT 1')
    random_kill = cursor.fetchone()[0]

    # Decide where the message has to be send to
    if not target: # If the someone entered just '.kill' the bot send the kill to the sender
        phenny.reply(random_kill)
    elif target.capitalize() == phenny.config.nick.capitalize(): # If someone enters '.kill <name of the bot>' the bot returns this
        phenny.reply('Watch out, boy!! >.>')
    else: # And if someone has entered a target the bot sends the kill to the target
        result = target + ': ' + random_kill
        phenny.say(result)

kill.commands = ['kill']
kill.example = '.kill <targeted user> or just .kill'

# This function only works in private message - Example: /msg <name of the bot> You are dead! :O
def addkill(phenny, input):
    """Adds an 'kill quote' to the database"""

    if input.sender.startswith('#'):
        return

    # Get the input (the kill) if there isn't any input return an error message
    query = input.group(2)
    if not query:
        return phenny.reply('Add what?')

    # Insert the kill in the database
    cursor.execute ("INSERT INTO kills (quote, approved) VALUES('" + db.escape_string(query) + "', 1)")
    db.commit()

    # Send a replay to the user
    phenny.reply('Added. :)')

addkill.commands = ['addkill']
addkill.example = '.addkill <your kill>'

if __name__ == '__main__':
    print __doc__.strip()
{% endhighlight %}

Put this code in `[the folder where phenny is installed]/modules/kill.py` and
startup Phenny and you can start killing on the IRC.
