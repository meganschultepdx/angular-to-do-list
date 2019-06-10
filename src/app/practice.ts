class Task {
    done: boolean = false;
    constructor(public description: string, public priority: string){}
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Buy chocolate.', 'low'));
tasks.push(new Task('Do Laundry.', 'high'));
console.log(tasks);
