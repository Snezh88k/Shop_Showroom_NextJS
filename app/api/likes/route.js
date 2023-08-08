
import { NextResponse } from "next/server";
import fsPromises from 'fs/promises';
import path from 'path';



export async function GET(request) {
  

  //  const jsonData = await fsPromises.readFile(dataFilePath);
    // ${JSON.parse(jsonData)}

    const dataFilePath =  path.join(process.cwd(), 'app/api/products.json');
const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);


  return  NextResponse.json(`Запрос прошел ${objectData}`);


}








