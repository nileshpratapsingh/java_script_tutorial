fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",

  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    title: "Nilesh",

    body: "powerbulid",

    phoneNumber: 7856746923,
  }),
})
  .then((response) => response.json())
  .then((json) => console.table(json));

//post request wrapped inside async function

const createToDo = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",

    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: "Nilesh2",

      body: "powerbuild2",

      phoneNumber: 7858246923,
    }),
  })
    .then((response) => response.json())
    //.then((json) => console.table(json));
};

const getToDo = async(id)=>{
  return await fetch("https://jsonplaceholder.typicode.com/posts/"+ id)
  .then(response => response.json())
}

const mainFunction = async () => {
  let todo = await createToDo();
  console.table(todo)
  console.table(await getToDo(5))
};
mainFunction();