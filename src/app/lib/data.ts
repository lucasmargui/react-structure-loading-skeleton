



export async function fetchRevenue() {


       console.log('Fetching revenue data...');
       await new Promise((resolve) => setTimeout(resolve, 1000));
       console.log('Fetching revenue data...');

       const data = '1 segundo'
       return data;
}

export async function fetchLatestInvoices() {

       console.log('Fetching fetchLatestInvoices data...');
       await new Promise((resolve) => setTimeout(resolve, 2000));

       const data = '2 segundos'
       return data;
}

export async function fetchCardData() {
  
 
  console.log('Fetching fetchCardData data...');
  await new Promise((resolve) => setTimeout(resolve, 3000));


  const data = '3 segundos'
  return data;

}









