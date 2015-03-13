# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('magic_the_gathering', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='match',
            name='winner',
            field=models.ForeignKey(to='magic_the_gathering.Player', null=True),
            preserve_default=True,
        ),
    ]
