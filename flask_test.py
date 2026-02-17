from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('sample.html')

@app.route('/video')
def sample():
    return render_template('video.html')

@app.route('/credits')
def credits():
    return  'Выполненно НКИ'
if __name__ == '__main__':
    app.run(debug=True, host = '0.0.0.0', port=5000)