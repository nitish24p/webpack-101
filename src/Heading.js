import React from 'react';

const Heading = (props: Object) => (
  <h1>{props.children}</h1>
);

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait till the promise resolves (*)

  alert(result); // "done!"
}

f();

export default Heading;