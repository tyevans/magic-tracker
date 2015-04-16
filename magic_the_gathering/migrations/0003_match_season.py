# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('magic_the_gathering', '0002_match_winner'),
    ]

    operations = [
        migrations.AddField(
            model_name='match',
            name='season',
            field=models.PositiveIntegerField(default=1),
            preserve_default=True,
        ),
    ]
