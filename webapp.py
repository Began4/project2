from flask import Flask, request , render_template
app = Flask(__name__)  

@app.route("/")
def root():
    return app.send_static_file('index.html')

@app.route("/hello") 
@app.route('/hello/<name>')
def hello(name=None):         
	return render_template('hello.html' , name=name)
	
@app.route("/home") 
@app.route('/home/<name>')
def home(name=None):         
	return render_template('home.html' , name=name)
	
@app.route("/hello2") 
@app.route('/hello2/<name>')
def hello2(name=None):         
	return render_template('hello2.html' , name=name)
	
@app.route("/hello3") 
@app.route('/hello3/<name>')
def hello3(name=None):         
	return render_template('hello3.html' , name=name)
	
@app.route("/hello4") 
@app.route('/hello4/<name>')
def hello4(name=None):         
	return render_template('hello4.html' , name=name)
	
@app.route("/hello5") 
@app.route('/hello5/<name>')
def hello5(name=None):         
	return render_template('hello5.html' , name=name)
	
@app.route("/hello6") 
@app.route('/hello6/<name>')
def hello6(name=None):         
	return render_template('hello6.html' , name=name)
	
@app.route("/paris") 
def paris(): 
 return "Some text about Paris"
	
@app.route("/japan") 
def japan(): 
 return "Some text about Japan"
	
if __name__ == "__main__":     
	app.run()
