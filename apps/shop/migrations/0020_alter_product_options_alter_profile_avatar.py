# Generated by Django 4.2.1 on 2023-08-08 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0019_remove_profile_av'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='product',
            options={'ordering': ('name',), 'permissions': [('provide_product', 'Can provide product')], 'verbose_name': 'Product', 'verbose_name_plural': 'Products'},
        ),
        migrations.AlterField(
            model_name='profile',
            name='avatar',
            field=models.ImageField(blank=True, default='profile_avatars/avatar_default.jpg', null=True, upload_to='profile_avatars'),
        ),
    ]
