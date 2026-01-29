try {
  let res = riskFunctin();
  console.log(res);
} catch (error) {
  console.error("======+>> ", error);
} finally {
  console.log("I am from final block");
}

function customeError() {
  try {
    age = -2;
    if (age < 0) {
      throw Error("Age should not be ");
    }
  } catch (e) {
    console.error(e);
  }
}

customeError();

let promise1 = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

async function callPromise() {
  try {
    let res1 = await promise1; // Coming from reject is an error. You should handle otherwiese lead to error.
    console.log(res1);
  } catch (e) {
    console.log("SOmething went wrong : ", e);
  }
}

callPromise();
