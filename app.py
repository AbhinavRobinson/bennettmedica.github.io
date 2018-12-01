from flask import Flask , render_template,request,jsonify,session, redirect
import pymongo

app = Flask(__name__)
app.debug = True
app.secret_key = "password"
myclient = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = myclient["BuMedica"]
mycol = mydb['Login']
y = mycol.find_one({"name":"Anmol Goyal"})
document = {'password':'anmol',"email":"anmolgoyal@gmail.com"}
#trial = mycol.insert_one(document)
@app.route('/')
def home():
    return render_template('index.html')

@app.route("/login")
def login():
    if 'email' in session:
        return redirect('https://bennettmedica.github.io/api/index.html')
    else:
        return render_template('login.html')

@app.route('/database')
def database():
    if y:
        return y['email']
    else:
        return "NO record"

@app.route("/first")
def first():
    return render_template('first.html')


@app.route('/check')
def check():
    if 'email' in session:
        return redirect('https://bennettmedica.github.io/api/index.html')
    else:
        return render_template('login.html')

@app.route('/register')
def register():

    email = request.form['email']
    name = request.form['name']
    password = request.form['password']
    if email and name and password :
        return render_template('index.html')


@app.route('/test')
def test():
    return render_template('ajax.html')

@app.route('/dashboard')
def dash():
    return render_template('dashboard.html')


@app.route('/process', methods=['POST'])
def process():

    email = request.form['email']
    name = request.form['name']

    if name and email :
        data = {'name':name,'email':email}
        insert = mycol.insert_one(data)
        output = "Result has been inserted"
        return jsonify({'name' : output})

    return jsonify({'error' : 'Missing data!'})

@app.route('/register_action',methods=['POST'])
def register_action():
    email = request.form['email']
    password = request.form['password']
    search = mycol.find_one({"email":email})
    if search:
        return jsonify({'error':"Record Exists"})
    else:
        information = {'email': email,'password':password}
        register_insert = mycol.insert_one(information)
        return jsonify({'record':'Inserted'})


@app.route('/login_action',methods=['POST'])
def login_action():
    email = request.form['email']
    password = request.form['password']

    login_search = mycol.find_one({'email':email})

    if password == login_search['password'] and login_search :
        session['email'] = email
        return jsonify({'value':'Session Activated'})
    else:
        return jsonify('error: Incomplete value')


@app.errorhandler(404)
def error404(error):
    return render_template('404.html'),404

if __name__ == "__main__":
	app.run()
