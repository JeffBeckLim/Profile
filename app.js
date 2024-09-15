const btn_bachelor = document.getElementById('btn-bachelor');
const btn_secondary_educ = document.getElementById('btn-secondary-educ');
const btn_primary_educ = document.getElementById('btn-primary-educ');

const bachelor_div = document.getElementById('bachelor-div');
const secondary_educ_div = document.getElementById('secondary-educ-div');
const primary_educ_div = document.getElementById('primary-educ-div');

bachelor_div.classList.remove('d-none')
btn_bachelor.classList.add('text-secondary');
// Add a click event listener to the element
btn_bachelor.addEventListener('click', function() {
    btn_bachelor.classList.add('text-secondary');
    btn_secondary_educ.classList.remove('text-secondary');
    btn_primary_educ.classList.remove('text-secondary');


    bachelor_div.classList.remove('d-none')
    secondary_educ_div.classList.add('d-none')
    primary_educ_div.classList.add('d-none')
});
btn_secondary_educ.addEventListener('click', function() {
    btn_bachelor.classList.remove('text-secondary');
    btn_secondary_educ.classList.add('text-secondary');
    btn_primary_educ.classList.remove('text-secondary');

    bachelor_div.classList.add('d-none')
    secondary_educ_div.classList.remove('d-none')
    primary_educ_div.classList.add('d-none')
});
btn_primary_educ.addEventListener('click', function() {
    btn_bachelor.classList.remove('text-secondary');
    btn_secondary_educ.classList.remove('text-secondary');
    btn_primary_educ.classList.add('text-secondary');

    bachelor_div.classList.add('d-none')
    secondary_educ_div.classList.add('d-none')
    primary_educ_div.classList.remove('d-none')
});