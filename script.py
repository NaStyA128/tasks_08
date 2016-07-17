from flask import Flask, request, render_template
import BattleField

app = Flask(__name__)
# app.static_folder = 'static'


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/form', methods=['POST'])
def form():
    battle = BattleField.BattleField(armies_number=int(request.form['arm_num']),
                                     strategy=request.form['strategy'],
                                     squads_number=int(request.form['squad']),
                                     soldiers_number=int(request.form['sold']),
                                     vehicles_number=int(request.form['vehic']))
    result = battle.start()
    return render_template('result.html', battle=request.form, result=result)


if __name__ == '__main__':
    app.run()
