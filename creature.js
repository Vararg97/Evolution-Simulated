class creature {
	constructor(parent1, parent2, x, y, generation, creatureId, randomOverride) {
        this.genes = 10;
        this.DNA = [];
        if (randomOverride) {
            for (var i = 0; i < this.genes; i++) {
                var gene = Math.floor(Math.random()*7).toString();
                var weight = Math.floor(Math.random()*81).toString();
                switch (weight) {
                    case "0":
                        weight = "00";
                    break;
                    case "1":
                        weight = "01";
                    break;
                    case "2":
                        weight = "02";
                    break;
                    case "3":
                        weight = "03";
                    break;
                    case "4":
                        weight = "04";
                    break;
                    case "5":
                        weight = "05";
                    break;
                    case "6":
                        weight = "06";
                    break;
                    case "7":
                        weight = "07";
                    break;
                    case "8":
                        weight = "08";
                    break;
                    case "9":
                        weight = "09";
                    break;
                }
                gene = gene.concat(weight, Math.floor(Math.random()*7).toString());
                this.DNA[i] = gene;
            }
        } else {
            for (var i = 0; i < this.genes; i++) {
                this.DNA[i] = this.getRandomParent(parent1, parent2, i);
            }
        }
        this.brain = [];
        this.position = [x, y];
        this.id = generation.toString().concat("-", creatureId);
        this.breathValue = 0;
        this.moveUpValue;
        this.moveDownValue;
        this.moveLeftValue;
        this.moveRightValue;
        this.breatheValue;
        this.FOEUpValue;
        this.FOEDownValue;
        this.FOELeftValue;
        this.FOERightValue;
        this.internal1Value;
        this.internal2Value;
        this.Internal1InputValues = [];
        this.Internal2InputValues = [];
        this.BreatheInputValues = [];
        this.MoveUpInputValues = [];
        this.MoveDownInputValues = [];
        this.MoveLeftInputValues = [];
        this.MoveRightInputValues = [];
        this.firstStepNeurons = [];
        this.followingStepNeurons = [];
        grid[this.position[0]][this.position[1]] = this.id;
        this.createBrain();
    }
    getRandomParent(parent1, parent2, gene) {
        var randomNumber = Math.floor(Math.random()*2)+1;
        if (randomNumber == 1) {
            return parent1.DNA[gene];
        }
        if (randomNumber == 2) {
            return parent2.DNA[gene];
        }
    }
    createBrain() {
        for (var i = 0; i < this.genes; i++) {
            var firstNeuron = this.DNA[i].slice(0,1);
            var weight = this.DNA[i].slice(1,3);
            var secondNeuron = this.DNA[i].slice(3,4);
            switch (firstNeuron) {
                case "0":
                    this.brain[i] = ["this.breath()"];
                break;
                case "1":
                    this.brain[i] = ["this.FOEUp()"];
                break;
                case "2":
                    this.brain[i] = ["this.FOEDown()"];
                break;
                case "3":
                    this.brain[i] = ["this.FOELeft()"];
                break;
                case "4":
                    this.brain[i] = ["this.FOERight()"];
                break;
                case "5":
                    this.brain[i] = ["this.Internal1()"];
                break;
                case "6":
                    this.brain[i] = ["this.Internal2()"];
                break;
            }
            switch (weight) {
                case "00":
                    this.brain[i][1] = 0.0;
                break;
                case "01":
                    this.brain[i][1] = -0.1;
                break;
                case "02":
                    this.brain[i][1] = -0.2;
                break;
                case "03":
                    this.brain[i][1] = -0.3;
                break;
                case "04":
                    this.brain[i][1] = -0.4;
                break;
                case "05":
                    this.brain[i][1] = -0.5;
                break;
                case "06":
                    this.brain[i][1] = -0.6;
                break;
                case "07":
                    this.brain[i][1] = -0.7;
                break;
                case "08":
                    this.brain[i][1] = -0.8;
                break;
                case "09":
                    this.brain[i][1] = -0.9;
                break;
                case "10":
                    this.brain[i][1] = -1.0;
                break;
                case "11":
                    this.brain[i][1] = -1.1;
                break;
                case "12":
                    this.brain[i][1] = -1.2;
                break;
                case "13":
                    this.brain[i][1] = -1.3;
                break;
                case "14":
                    this.brain[i][1] = -1.4;
                break;
                case "15":
                    this.brain[i][1] = -1.5;
                break;
                case "16":
                    this.brain[i][1] = -1.6;
                break;
                case "17":
                    this.brain[i][1] = -1.7;
                break;
                case "18":
                    this.brain[i][1] = -1.8;
                break;
                case "19":
                    this.brain[i][1] = -1.9;
                break;
                case "20":
                    this.brain[i][1] = -2.0;
                break;
                case "21":
                    this.brain[i][1] = -2.1;
                break;
                case "22":
                    this.brain[i][1] = -2.2;
                break;
                case "23":
                    this.brain[i][1] = -2.3;
                break;
                case "24":
                    this.brain[i][1] = -2.4;
                break;
                case "25":
                    this.brain[i][1] = -2.5;
                break;
                case "26":
                    this.brain[i][1] = -2.6;
                break;
                case "27":
                    this.brain[i][1] = -2.7;
                break;
                case "28":
                    this.brain[i][1] = -2.8;
                break;
                case "29":
                    this.brain[i][1] = -2.9;
                break;
                case "30":
                    this.brain[i][1] = -3.0;
                break;
                case "31":
                    this.brain[i][1] = -3.1;
                break;
                case "32":
                    this.brain[i][1] = -3.2;
                break;
                case "33":
                    this.brain[i][1] = -3.3;
                break;
                case "34":
                    this.brain[i][1] = -3.4;
                break;
                case "35":
                    this.brain[i][1] = -3.5;
                break;
                case "36":
                    this.brain[i][1] = -3.6;
                break;
                case "37":
                    this.brain[i][1] = -3.7;
                break;
                case "38":
                    this.brain[i][1] = -3.8;
                break;
                case "39":
                    this.brain[i][1] = -3.9;
                break;
                case "40":
                    this.brain[i][1] = -4.0;
                break;
                case "41":
                    this.brain[i][1] = 0.1;
                break;
                case "42":
                    this.brain[i][1] = 0.2;
                break;
                case "43":
                    this.brain[i][1] = 0.3;
                break;
                case "44":
                    this.brain[i][1] = 0.4;
                break;
                case "45":
                    this.brain[i][1] = 0.5;
                break;
                case "46":
                    this.brain[i][1] = 0.6;
                break;
                case "47":
                    this.brain[i][1] = 0.7;
                break;
                case "48":
                    this.brain[i][1] = 0.8;
                break;
                case "49":
                    this.brain[i][1] = 0.9;
                break;
                case "50":
                    this.brain[i][1] = 1.0;
                break;
                case "51":
                    this.brain[i][1] = 1.1;
                break;
                case "52":
                    this.brain[i][1] = 1.2;
                break;
                case "53":
                    this.brain[i][1] = 1.3;
                break;
                case "54":
                    this.brain[i][1] = 1.4;
                break;
                case "55":
                    this.brain[i][1] = 1.5;
                break;
                case "56":
                    this.brain[i][1] = 1.6;
                break;
                case "57":
                    this.brain[i][1] = 1.7;
                break;
                case "58":
                    this.brain[i][1] = 1.8;
                break;
                case "59":
                    this.brain[i][1] = 1.9;
                break;
                case "60":
                    this.brain[i][1] = 2.0;
                break;
                case "61":
                    this.brain[i][1] = 2.1;
                break;
                case "62":
                    this.brain[i][1] = 2.2;
                break;
                case "63":
                    this.brain[i][1] = 2.3;
                break;
                case "64":
                    this.brain[i][1] = 2.4;
                break;
                case "65":
                    this.brain[i][1] = 2.5;
                break;
                case "66":
                    this.brain[i][1] = 2.6;
                break;
                case "67":
                    this.brain[i][1] = 2.7;
                break;
                case "68":
                    this.brain[i][1] = 2.8;
                break;
                case "69":
                    this.brain[i][1] = 2.9;
                break;
                case "70":
                    this.brain[i][1] = 3.0;
                break;
                case "71":
                    this.brain[i][1] = 3.1;
                break;
                case "72":
                    this.brain[i][1] = 3.2;
                break;
                case "73":
                    this.brain[i][1] = 3.3;
                break;
                case "74":
                    this.brain[i][1] = 3.4;
                break;
                case "75":
                    this.brain[i][1] = 3.5;
                break;
                case "76":
                    this.brain[i][1] = 3.6;
                break;
                case "77":
                    this.brain[i][1] = 3.7;
                break;
                case "78":
                    this.brain[i][1] = 3.8;
                break;
                case "79":
                    this.brain[i][1] = 3.9;
                break;
                case "80":
                    this.brain[i][1] = 4.0;
                break;
            }
            switch (secondNeuron) {
                case "0":
                    this.brain[i][2] = "this.BreatheInputs("+this.brain[i][0]+"*"+this.brain[i][1]+")";
                break;
                case "1":
                    this.brain[i][2] = "this.MoveUpInputs("+this.brain[i][0]+"*"+this.brain[i][1]+")";
                break;
                case "2":
                    this.brain[i][2] = "this.MoveDownInputs("+this.brain[i][0]+"*"+this.brain[i][1]+")";
                break;
                case "3":
                    this.brain[i][2] = "this.MoveLeftInputs("+this.brain[i][0]+"*"+this.brain[i][1]+")";
                break;
                case "4":
                    this.brain[i][2] = "this.MoveRightInputs("+this.brain[i][0]+"*"+this.brain[i][1]+")";
                break;
                case "5":
                    this.brain[i][2] = "this.Internal1Inputs("+this.brain[i][0]+"*"+this.brain[i][1]+")";
                break;
                case "6":
                    this.brain[i][2] = "this.Internal2Inputs("+this.brain[i][0]+"*"+this.brain[i][1]+")";
                break;
            }
            if (firstNeuron == "0" || firstNeuron == "1" || firstNeuron == "2" || firstNeuron == "3" || firstNeuron == "4") {
                this.firstStepNeurons.push(this.brain[i]);
            } else {
                this.followingStepNeurons.push(this.brain[i]);
            }
        }
    }
    think() {
        for (var i = 0; i < this.firstStepNeurons.length; i++) {
            eval(this.firstStepNeurons[i][2]);
        }
        this.Internal1();
        this.Internal2();
        for (var i = 0; i < this.followingStepNeurons.length; i++) {
            eval(this.followingStepNeurons[i][2]);
        }
        this.Internal1();
        this.Internal2();
        this.MoveUp();
        this.MoveDown();
        this.MoveLeft();
        this.MoveRight();
        this.Breathe();
        var check = this.BreatheAction();
        if (!check) {
            this.MoveUpAction();
            this.MoveDownAction();
            this.MoveLeftAction();
            this.MoveRightAction();
        }
    }
    breath() {
        switch (this.breathValue) {
            case 0:
                return 0.0;
            break;
            case 1:
                return 0.2;
            break;
            case 2:
                return 0.4;
            break;
            case 3:
                return 0.6;
            break;
            case 4:
                return 0.8;
            break;
            case 5:
                return 1.0;
            break;
        }
    }
    FOEUp() {
        if (grid[this.position[0]][this.position[1] - 1] == null) {
            return 1;
        } else {
            return 0;
        }
    }
    FOEDown() {
        if (grid[this.position[0]][this.position[1] + 1] == null) {
            return 1;
        } else {
            return 0;
        }
    }
    FOELeft() {
        if (grid[this.position[0] - 1] != undefined) {
            if (grid[this.position[0] - 1][this.position[1]] == null) {
                return 1;
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    }
    FOERight() {
        if (grid[this.position[0] + 1] != undefined) {
            if (grid[this.position[0] + 1][this.position[1] - 1] == null) {
                return 1;
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    }
    Internal1() {
        var sum = 0;
        for (var i = 0; i < this.Internal1InputValues.length; i++) {
            sum = sum + this.Internal1InputValues[i];
        }
        this.internal1Value = Math.tanh(sum);
    }
    Internal2() {
        var sum = 0;
        for (var i = 0; i < this.Internal2InputValues.length; i++) {
            sum = sum + this.Internal2InputValues[i];
        }
        this.internal2Value = Math.tanh(sum);
    }
    MoveUp() {
        var sum = 0;
        for (var i = 0; i < this.MoveUpInputValues.length; i++) {
            sum = sum + this.MoveUpInputValues[i];
        }
        this.moveUpValue = Math.tanh(sum);
    }
    MoveDown() {
        var sum = 0;
        for (var i = 0; i < this.MoveDownInputValues.length; i++) {
            sum = sum + this.MoveDownInputValues[i];
        }
        this.moveDownValue = Math.tanh(sum);
    }
    MoveLeft() {
        var sum = 0;
        for (var i = 0; i < this.MoveLeftInputValues.length; i++) {
            sum = sum + this.MoveLeftInputValues[i];
        }
        this.moveLeftValue = Math.tanh(sum);
    }
    MoveRight() {
        var sum = 0;
        for (var i = 0; i < this.MoveRightInputValues.length; i++) {
            sum = sum + this.MoveRightInputValues[i];
        }
        this.moveRightValue = Math.tanh(sum);
    }
    Breathe() {
        var sum = 0;
        for (var i = 0; i < this.BreatheInputValues.length; i++) {
            sum = sum + this.BreatheInputValues[i];
        }
        this.breatheValue = Math.tanh(sum);
    }
    BreatheAction() {
        if (typeof this.breathValue == "number") {
            if (this.breatheValue > 0) {
                this.breathValue = 0;
                return true;
            }
        }
    }
    MoveUpAction() {
        if (typeof this.moveUpValue == "number") {
            if (this.moveUpValue > 0) {
                grid[this.position[0]][this.position[1]] = null;
                if (grid[this.position[0]][this.position[1]-1] == null) {
                    this.position[1]--;
                    grid[this.position[0]][this.position[1]] = this.id;
                } else {
                    this.death();
                }
            }
        }
    }
    MoveDownAction() {
        if (typeof this.moveDownValue == "number") {
            if (this.moveDownValue > 0) {
                grid[this.position[0]][this.position[1]] = null;
                if (grid[this.position[0]][this.position[1]+1] == null) {
                    this.position[1]++;
                    grid[this.position[0]][this.position[1]] = this.id;
                } else {
                    this.death();
                }
            }
        }
    }
    MoveLeftAction() {
        if (typeof this.moveLeftValue == "number") { //fix these too, and the other ones up top
            if (this.moveLeftValue > 0) {
                if (grid[this.position[0]-1] != undefined) {
                    grid[this.position[0]][this.position[1]] = null;
                    if (grid[this.position[0]-1][this.position[1]] == null) {
                        this.position[0]--;
                        grid[this.position[0]][this.position[1]] = this.id;
                    } else {
                        this.death();
                    }
                } else {
                    this.death();
                }
            }
        }
    }
    MoveRightAction() {
        if (typeof this.moveRightValue == "number") {
            if (this.moveRightValue > 0) {
                if (grid[this.position[0]+1] != undefined) {
                    grid[this.position[0]][this.position[1]] = null;
                    if (grid[this.position[0]+1][this.position[1]] == null) {
                        this.position[0]++;
                        grid[this.position[0]][this.position[1]] = this.id;
                    } else {
                        this.death();
                    }
                } else {
                    this.death();
                }
            }
        }
    }
    Internal1Inputs(input) {
        this.Internal1InputValues.push(input);
    }
    Internal2Inputs(input) {
        this.Internal2InputValues.push(input);
    }
    BreatheInputs(input) {
        this.BreatheInputValues.push(input);
    }
    MoveUpInputs(input) {
        this.MoveUpInputValues.push(input);
    }
    MoveDownInputs(input) {
        this.MoveDownInputValues.push(input);
    }
    MoveLeftInputs(input) {
        this.MoveLeftInputValues.push(input);
    }
    MoveRightInputs(input) {
        this.MoveRightInputValues.push(input);
    }
    death() {
        grid[this.position[0]][this.position[1]] = null;
        delete creatures[this.id];
    }
}