import Dropdown from "bootstrap/js/dist/dropdown";
// import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import Modal from "bootstrap/js/dist/modal";

const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown.Dropdown(dropdownToggleEl)
    //return new bootstrap.Dropdown(dropdownToggleEl)
})

new Modal(document.getElementById('#exampleyModal'),{
    backdrop: 'static'
})