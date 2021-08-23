"""
author: Adrian Hernandez
email: adrian.hernandez.p0@gmail.com
encoding: utf-8
description: this module is where the applicacion is created depending in the cinfiguration on hte 
environment when it is run. it also creates the context processor for the flask shell and save time 
importing classes or objects
"""

import os

from app import create_app, db

app = create_app(os.environ.get('FLASK_CONFIG' or 'default'))

@app.make_shell_context_processor
def make_shell_context():
    return dict(db=db)