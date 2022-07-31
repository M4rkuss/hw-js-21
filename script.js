// //1)
// class Test {
//   constructor (questions, points, answer) {
//     this.questions = questions;
//     this.points = points;
//     this.answer = answer;
//   }
//   printQuestion () {
//     return `Вопрос: ${this.questions}`;
//   }
//   printPoints () {
//     return (this.points.forEach(e => console.log(e)));
//   }
//   checkAnswer () {
//     if (this.answer === 'Киев') {
//       return `Ваш ответ: ${this.answer} - это правильно!`;
//     } else return `Ваш ответ: ${this.answer} - это не правильно(`;
//   }
// }
//
// class MultiplyChoiceTestItem extends Test {
//   constructor (questions, points, answer, hint) {
//     super(questions, points, answer)
//     this.hint = hint;
//   }
//   checkAnswer () {
//     if (this.answer === 'Заповіт') {
//       return `Ваш ответ: ${this.answer} - это правильно!`;
//     } else return `Ваш ответ: ${this.answer} - это не правильно(`;
//   }
//   showHint () {
//     return `Подсказка: ${this.hint}`
//   }
// }
//
// let item = new Test('Столица Украины?', ['Киев', 'Нью-Йорк', 'Львов'], 'Киев')
// console.log(item.printQuestion());
// console.log(item.printPoints());
// console.log(item.checkAnswer());
//
// let newItem = new MultiplyChoiceTestItem('Виберіть твори Шевченка', ['Заповіт', 'ІЗ ЛІТ МОЄЇ МОЛОДОСТІ', 'Учітеся, брати мої!'], 'Заповіт', 'Один із творів Шевченка виявляє його волю');
// console.log(newItem.printQuestion());
// console.log(newItem.printPoints());
// console.log(newItem.showHint());
// console.log(newItem.checkAnswer());


// //2)
// class Employee {
//   constructor (name, about) {
//     this.name = name;
//     this.about = about;
//   }
//   print () {
//     return `${this.name}: ${this.about}`;
//   }
// }
//
// class President extends Employee {
//   constructor (name, about) {
//     super(name, about)
//   }
//   print () {
//     return super.print()
//   }
// }
//
// class Manager extends Employee {
//   constructor (name, about) {
//     super(name, about)
//   }
//   print () {
//     return super.print()
//   }
// }
//
// class Worker extends Employee {
//   constructor (name, about) {
//     super(name, about)
//   }
//   print () {
//     return super.print()
//   }
// }
//
// let employee = new Employee('Рабочий');
// let president = new President('Карл','Не просто рабочий, а президент!');
// let manager = new Manager('Полина','Не президент, но и не обычный работяга - менеджер');
// let worker = new Worker('Клерк','Обычный работяга');
//
// console.log(president.print());
// console.log(manager.print());
// console.log(worker.print());
//
// let workersArr = [];
// workersArr.push(president);
// workersArr.push(manager);
// workersArr.push(worker);
// console.log(workersArr);


//3)
class EmpTable {
  constructor (workers) {
    this.workers = workers;
  }
  getHtml () {
    document.body.style.padding = '50px';
    document.body.insertAdjacentHTML('afterbegin',`<table><tbody><tr><td>ID</td><td>Name</td></tr></tbody></table>`);
    for (let i = 0; i < this.workers.length; i++) {
      if (i) {
        document.querySelector('tbody').insertAdjacentHTML('beforeend', `<tr><td>${i}</td><td>${this.workers[i]}</td></tr>`);
      }
    }
  }
}

let table = new EmpTable(['Markus', 'Clark', 'Ben', 'Holly', 'Polina']);
table.getHtml();