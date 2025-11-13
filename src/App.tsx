import "./App.css";
import { appendFileSync } from "fs";

function App() {
 interface Payment {
  to : string;
  from : string;
  amount : number;
  notes : string;  
 }
type PaymentColumns = ('to'| 'from'| 'amount'| 'notes')[];
class CSVWriter{
  private columns: PaymentColumns;
 
  constructor(columns: PaymentColumns){
    this.columns = columns;
    this.csv = this.columns.join(",") 
  }
  private csv: string
  addRows(rows: Payment[]):void{
    const formattedRows = rows.map(row => this.formatRow(row));
    this.csv += "\n" + formattedRows.join("\n");
  }
  saveToFile(filename: string):void{
    appendFileSync(filename, this.csv);
    this.csv = "";

    console.log(`CSV data saved to ${filename}`);
  }

  private formatRow(row: Payment): string{
    return this.columns.map(col => row[col]).join(",")
  }
}

 const writer = new CSVWriter(["to", "from", "amount", "notes"]);

 writer.addRows([
  {to: "John", from: "Jane", amount: 100, notes: "Payment for services"},
  {to: "Acme Corp", from: "John", amount: 250, notes: "Invoice #1234"},
  {to: "Jane", from: "Acme Corp", amount: 75, notes: "Refund for order #5678"},
  {to: "Foo Inc", from: "Bar LLC", amount: 300, notes: "Consulting fee"}
 ]);
 writer.saveToFile("./data/test.csv");
  return (
<div>The app</div>
  );
}

export default App;
