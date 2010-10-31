---
layout: post
title: PyGTK Volume slider
author: Frank
date: 2009-09-08 22:34:20 +0200
categories: [Python, PyGTK, Alsa]
---

<ul class="green-list">
    <li><strong>Update July 26th, 2009:</strong> Made some changes to the code. <code>re</code>
    and <code>webbrowser</code> modules are removed. And changed some other small things.</li>
    <li><strong>Update September 8th, 2009:</strong> Cleaned up some code. :)</li>
</ul>

I couldn't find a volume slider that sits in the systemtray. Or I'm just blind.
It's made with Python and PyGTK and uses `amixer` to adjust the volume. That
means it only works on alsa.

![Volume Control]({{ site.cdn }}/img/volume_control.png)

Let me know if you got suggestions. Here's the code.

{% highlight python %}
#!/usr/bin/env python

#
#  Volume Conctrol, made by Frank Smit, http://61924.nl
#  Volume Control is a simple tool to adjust your Master volume.
#  It uses "amixer" from alsa to set and get the volume.
#

import subprocess
import gtk

class VolumeControl(gtk.StatusIcon):

    name = 'Volume Control'
    version = '0.1.2'
    position = (0, 0)
    vol_adjust = range(0, 26)

    def __init__(self):

        # Icons/systemtray
        gtk.StatusIcon.__init__(self)
        self.set_from_stock(gtk.STOCK_MEDIA_RECORD)

        # Menu
        menu_about = gtk.ImageMenuItem(gtk.STOCK_ABOUT)
        menu_quit = gtk.ImageMenuItem(gtk.STOCK_QUIT)

        menu = gtk.Menu()
        menu.append(menu_about)
        menu.append(menu_quit)

        # Events
        self.connect('activate', self.__activate_icon)
        self.connect('popup-menu', self.__tray_popup, menu)
        menu_about.connect('button-press-event', self.show_about_dialog)
        menu_quit.connect('button-press-event', gtk.main_quit)

        # Create window
        self.slider_window()

    #
    # The volume slider window
    #
    def slider_window(self):

        # Slider
        slider = gtk.VScale()
        slider.set_inverted(True)
        slider.set_range(0, 100)
        slider.set_increments(1, 10)
        slider.set_digits(0)
        slider.set_size_request(34, 160)
        slider.set_value_pos(gtk.POS_BOTTOM)
        slider.set_value(self.__get_master_volume())

        # Events
        slider.connect('value-changed', self.__update_master_volume)

        # Add widgets
        fixed_slider = gtk.Fixed()
        fixed_slider.put(slider, 3, 5)

        # Frame
        frame = gtk.Frame()
        frame.set_border_width(1)
        frame.add(fixed_slider)

        # Window
        self.window = gtk.Window(gtk.WINDOW_POPUP)
        self.window.set_size_request(44, 171)
        self.window.add(frame)

    #
    #  Tray icon click
    #
    def __activate_icon(self, widget, data=None):

        if self.window.get_property('visible'):
            self.window.hide()
        else:
            self.__set_window_position()
            self.window.move(self.position[0], self.position[1])
            self.window.show_all()
            self.window.present()

    #
    #  System tray menu
    #
    def __tray_popup(self, widget, button, time, data = None):

        if button == 3:
            if data is not None:
                data.show_all()
                data.popup(None, None, None, 3, time)

    #
    #  Set master volume
    #
    def __update_master_volume(self, widget):

        val = widget.get_value()

        if (val / 4) in self.vol_adjust:
            proc = subprocess.Popen('/usr/bin/amixer sset Master ' + str(val) + '%', shell=True, stdout=subprocess.PIPE)
            proc.wait()

    #
    #  Set window position (just above the system tray icon)
    #
    def __set_window_position(self):

        staticon_geometry = self.get_geometry()[1]

        if staticon_geometry.y <= 200:
            y_coords = staticon_geometry.y
        else:
            y_coords = staticon_geometry.y-180

        self.position = (staticon_geometry.x-13, y_coords)

    #
    #  Get Master volume
    #
    def __get_master_volume(self):

        proc = subprocess.Popen('/usr/bin/amixer sget Master', shell=True, stdout=subprocess.PIPE)
        amixer_stdout = proc.communicate()[0].split('\n')[4]
        proc.wait()

        find_start = amixer_stdout.find('[') + 1
        find_end = amixer_stdout.find('%]', find_start)

        return float(amixer_stdout[find_start:find_end])

    #
    #  About dialog
    #
    def show_about_dialog(self, widget, data=None):

        about = gtk.AboutDialog()
        about.set_program_name(self.name)
        about.set_version(self.version)
        about.set_comments('Volume Control is a simple tool to adjust your Master volume. '
            'It uses "amixer" from alsa to set and get the volume.\n\nWritten by Frank Smit - http://61924.nl/')
        about.run()
        about.destroy()

if __name__ == '__main__':
    VolumeControl()
    gtk.main()
{% endhighlight %}
