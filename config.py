"""
author: Adrian Hernandez
email: adrian.hernandez.p0@gmail.com
encoding: utf-8
description: This file contains classes that represent the different configurations
depeding on the mode of running the project. they are all packed in the config dictionary
in order to be accesed by name. 
"""

import os 

basedir = os.path.abspath(os.path.dirname(__name__))

class Config: 
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'secret key string'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    @staticmethod
    def init_app(app):
        pass

class DevelopmentConfig(Config):
    FLASK_DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('DEV_DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'data-dev.sqlite')

class ProductionConfig(Config):
    FLASK_DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'data.sqlite')

config = {
    'development': DevelopmentConfig, 
    'production': ProductionConfig, 
    'default': DevelopmentConfig,
}