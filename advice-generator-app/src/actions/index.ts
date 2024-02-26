"use server";

export async function getRandom() {
    const response = await fetch("https://api.adviceslip.com/advice", {
        method: 'GET',
      });
    const result = await response.json();
    return result;
}

export async function getById(id: string) {
    const response = await fetch(`https://api.adviceslip.com/advice/${id}`, {
        method: 'GET',
      });
    const result = await response.json();
    return result;
}
