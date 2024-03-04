import { CalcExtension } from "./base/CalcExtension";

let calc= new CalcExtension();
calc.calculate(1,"+",2);
calc.showValue();

calc.calculate(10,"-",2);
calc.showValue();

calc.calculate(10,"*",2);
calc.showValue();

calc.calculate(10,"/",2);
calc.showValue();
