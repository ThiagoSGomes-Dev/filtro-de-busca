import "./css/index.css";

document.querySelector('#app').innerHTML = `
      <header>
        <h1>How can I help you?</h1>
        <div class="input-wrapper">
          <label for="filter" class="sr-only">Filter</label>
          <input id="filter" type="text" placeholder="Filter">
          <i class="ph-magnifying-glass"></i>
        </div>
      </header>

      <main>
        <ul class="cards">

          <li>
            <div class="header">
              <i class="ph-graduation-cap"></i>
              <h2>How to start</h2>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, quasi, laborum quisquam fugit aut maiores eveniet nemo incidunt distinctio et ducimus.</p>
            <a href="#">More</a>
          </li>
          <li>
            <div class="header">
              <i class="ph-bug"></i>
              <h2>Issues</h2>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, quasi, laborum quisquam fugit aut maiores eveniet nemo incidunt distinctio et ducimus.
            </p>
            <a href="#">More</a>
          </li>
          <li>
            <div class="header">
              <i class="ph-question"></i>
              <h2>FAQ</h2>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, quasi, laborum quisquam fugit aut maiores eveniet nemo incidunt distinctio et ducimus.
            </p>
            <a href="#">More</a>
          </li>
          <li>
            <div class="header">
              <i class="ph-code"></i>
              <h2>Coding</h2>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, quasi, laborum quisquam fugit aut maiores eveniet nemo incidunt distinctio et ducimus.
            </p>
            <a href="#">More</a>
          </li>

        </ul>
      </main>
`

// get filter element
// get cards elements

// add input event for the filter element

// filter function
  // if the filter is not empty
    // for each card of cards
      // get card heading (title)
      // tranform to lower case
      // transform filter text to lower case
      // if card title does not include the filter text
        // hide the card element
      // else
        // unhide the card element
  // else
    // for each card of cards
      // unhide the card element
