# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-05-27 09:11
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('member_infor', '0003_member_create_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='member',
            name='create_date',
        ),
    ]