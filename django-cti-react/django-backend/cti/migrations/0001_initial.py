# Generated by Django 3.2.9 on 2022-10-09 11:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('comment', models.TextField()),
                ('createdAt', models.DateTimeField(auto_now_add=True, verbose_name='Created At')),
            ],
        ),
    ]
