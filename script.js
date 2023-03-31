console.log("Is this thing on?")
// Just check if the jQuery is working
// $(document).ready(function(){  alert("Ready!");  });


var exerciseFormEl = $('#exercise-form');
var exerciseListEl = $('#exercise-list');
var exerciseInputEl = $('#floatingExercise');
var setrepInputEl = $('#floatingSetsReps');
var weightInputEl = $('#floatingWeights');


// append the made up list items to the list element above
// Create elements with the classes of the checked boxes in bootstrap


var printExercises = function (exercise, setsreps, weight) {
    var listEl = $('<li>');
    var checkEl = $('<input>').attr('type', 'checkbox')
    var listDetail = exercise.concat(' for ', setsreps, weight)
    listEl.addClass('list-group-item').text(listDetail);
    listEl.appendTo(checkEl);
    checkEl.appendTo(exerciseListEl);
    // listEl.appendTo(exerciseListEl);
    console.log('appending to list?')
};

var handleFormSubmit = function (event) {
    console.log('handleformSubmit working')
    event.preventDefault();
  
    var exerciseInput = exerciseInputEl.val();
    var setrepInput = setrepInputEl.val();
    var weightInput = weightInputEl.val();
  
    if (!exerciseInput || !setrepInput || !weightInput) {
       
      console.log('Please fill out the form!');
      return;


    }

    printExercises(exerciseInput, setrepInput); // set weight in this function as well if you can


    // not working :/
    // create user object from submission
    var exercise = {
        exerciseListed: exerciseInputEl.value.trim(),
        setsReps: setrepInputEl.value.trim(),
        weight: weightInputEl.value.trim(),
        };

    // set new submission to local storage 
    localStorage.setItem("exercise", JSON.stringify(exercise));
  
    
  
    // resets form
    exerciseInputEl.val('');
    setrepInputEl.val('');
    weightInputEl.val('');
};

//   exerciseFormEl.on('Submit', handleFormSubmit);
//   $('#save-btn').on('Submit', handleFormSubmit);
  $('#save-btn').on('click', handleFormSubmit);
  $("#save-btn").on("click", handleFormSubmit, function(){
      console.log("Click works")
    alert("The paragraph was clicked.");
  });

//   Add a delete function


//   // Autocomplete widget for extra fanciness
// $(function () {
//     var exerciseNames = [
//       'Glute Bridges',
//       'Romanian Deadlifts',
//       'Hip Thrusts',
//       'Kick Feets',
//       'Toe Touches',
//       'Hip mobility exercises',
//       'Bicycles',
//       'Kickbacks',
//     ];
//     $('#floatingExercise').autocomplete({
//       source: exerciseNames,
//     });
//   });
  
//   // Datepicker widget
//   $(function () {
//     $('#datepicker').datepicker({
//       changeMonth: true,
//       changeYear: true,
//     });
//   });
