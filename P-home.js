function showToast(a) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    if(a==2){
    toast.innerHTML = `
    <span class="close-button" onclick="closeToast()">X</span>
    <h2>Feedback Form</h2>

    <form method="get">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
  
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
  
      <label for="rating">Rating:</label>
      <select id="rating" name="rating" required>
        <option value="5">5 - Excellent</option>
        <option value="4">4 - Very Good</option>
        <option value="3">3 - Good</option>
        <option value="2">2 - Fair</option>
        <option value="1">1 - Poor</option>
      </select>
  
      <label for="comments">Comments:</label>
      <textarea id="comments" name="comments" rows="4" required></textarea>
      <div>
      <button type="submit">Submit Feedback</button>
      <button type="reset" >Reset</button>
      <button onclick="handleNo()">Cancel</button>
      </div>
    </form>
    `;}
    else if(a==1)
    {
    toastContainer.innerHTML = '';
      toast.innerHTML = `
    <span class="close-button" onclick="closeToast()">X</span>
    <h2>Track Your order</h2>
    <form  method="get">
    <label for="orderNumber">Order Number:</label>
    <input type="text" id="orderNumber" name="orderNumber" placeholder="Enter your order number" required>

    <label for="email">Email Address:</label>
    <input type="text" id="email" name="email" placeholder="Enter your email address" required>  
      <label for="rating">Categary:</label>
      <select id="rating" name="rating" required>
        <option value="5">1-Deals of Day</option>
        <option value="4">2- Fashion</option>
        <option value="3">3 - Electronics</option>
        <option value="2">2 - Educational Product</option>
        <option value="1">1 - Other</option>
      </select>
      <div>
      <button type="submit">Track Order</button>
      <button type="reset" >Reset</button>
      <button onclick="handleNo()">Cancel</button>
      </div>
    </form>
    `;
    }
    toastContainer.appendChild(toast);
    toast.style.display = 'block';
  }
  function closeToast() {
    toastContainer = document.getElementById('toast-container');
    toastContainer.innerHTML = '';
  }
  function handleYes() {
    console.log('Yes clicked');
    closeToast(); 
  }
  function handleNo() {
    console.log('No clicked');
    closeToast();
  }
  let modeC = "light";
  function mode1() {
      console.log("hello you clicked");
      if (modeC === "light") {
          modeC = "dark";
          document.getElementById('btn').innerText="Dark";
          document.getElementsByTagName('nav')[0].style.backgroundColor = "gray";
        } else {
          modeC = "light";
          document.getElementById('btn').innerText="Light";
          document.getElementsByTagName('nav')[0].style.backgroundColor = "white";
      }
  }