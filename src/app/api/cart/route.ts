import { arrivalData } from "@/components/data/arrival";
import { ProductType } from "@/types/product";
import { NextResponse } from "next/server";

const cart: ProductType[] = [];

export async function POST(request: Request) {
  try {
    const { id }: { id: string } = await request.json();
    console.log("Received ID:", id);
    console.log("All Product IDs:", arrivalData.map((product) => product.id));

    const foundProduct = arrivalData.find((product) => product.id === id);

    console.log("Found Product:", foundProduct);

    if (!foundProduct) {
      return NextResponse.json({ error: "Product not found!" }, { status: 404 });
    }

    cart.push(foundProduct);

    return NextResponse.json({ message: "Product added to cart!", product: foundProduct });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
  }
}



export async function GET(request: Request) {
  try {
    return NextResponse.json({ cart });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
  }
}