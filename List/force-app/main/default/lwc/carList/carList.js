import { LightningElement } from 'lwc';

 export default class CarList extends LightningElement {
//     input;
//     output;
//     car = {
//         motor: 3.5,
//         name : 'BMW'
//     }



//     handleChange(event) {
//         let tmp = event.target.value;
//         this.output = tmp.toUpperCase();
//     }
// }

    carColumns = [
        { label: 'Cars', fieldName: 'carid' },
        { label: 'Motor', fieldName: 'motorid' },
        { label: 'Color', fieldName: 'colorid' },
        { label: 'Weight', fieldName: 'weightid'},
    ];

    carData = [
        {
            carid: 'BMW',
            motorid: '2.0',
            colorid: 'Red',
            weightid: '2.0t',
        },
        {
            carid: 'Nissan',
            motorid: '3.0',
            colorid: 'Black',
            weightid: '1.0t',
        },
        {
            carid: 'Renault',
            motorid: '6.0',
            colorid: 'Silver',
            weightid: '3.0t',
        }
    ];

    contact = {};
    countryOptions = [
        { "label": "Afghanistan", "value": "Afghanistan" },
        { "label": "Albania", "value": "Albania" },
        { "label": "Algeria", "value": "Algeria" },
        { "label": "Andorra", "value": "Andorra" },
        { "label": "Angola", "value": "Angola" },
        { "label": "Antigua & Deps", "value": "Antigua  & Deps"},
        { "label": "Argentina", "value": "Argentina" },
        { "label": "Armenia", "value": "Armenia" },
        { "label": "Australia", "value": "Australia" },
        { "label": "Austria", "value": "Austria" },
        { "label": "Azerbaijan", "value": "Azerbaijan" },
        { "label": "Bahamas", "value": "Bahamas" },
        { "label": "Bahrain", "value": "Bahrain" },
        { "label": "Bangladesh", "value": "Bangladesh" },
        { "label": "Barbados", "value": "Barbados" },
        { "label": "Belarus", "value": "Belarus" },
        { "label": "Belgium", "value": "Belgium" },
        { "label": "Belize", "value": "Belize" },
        { "label": "Benin", "value": "Benin" },
        { "label": "Bhutan", "value": "Bhutan" },
        { "label": "Bolivia", "value": "Bolivia" },
        { "label": "Bosnia Herzegovina", "value": "Bosnia  Herzegovina"},
        { "label": "Botswana", "value": "Botswana" },
        { "label": "Brazil", "value": "Brazil" },
        { "label": "Brunei", "value": "Brunei" },
        { "label": "Bulgaria", "value": "Bulgaria" },
        { "label": "Burkina", "value": "Burkina" },
        { "label": "Burundi", "value": "Burundi" },
        { "label": "Cambodia", "value": "Cambodia" },
        { "label": "Cameroon", "value": "Cameroon" },
        { "label": "Canada", "value": "Canada" },
        { "label": "Cape Verde", "value": "Cape  Verde"},
        { "label": "Central African Rep", "value": "Central  African Rep"},
        { "label": "Chad", "value": "Chad" },
        { "label": "Chile", "value": "Chile" },
        { "label": "China", "value": "China" },
        { "label": "Colombia", "value": "Colombia" },
        { "label": "Comoros", "value": "Comoros" },
        { "label": "Congo", "value": "Congo" },
        { "label": "Congo {Democratic Rep}", "value": "Congo  {Democratic Rep}"},
        { "label": "Costa Rica", "value": "Costa  Rica"},
        { "label": "Croatia", "value": "Croatia" },
        { "label": "Cuba", "value": "Cuba" },
        { "label": "Cyprus", "value": "Cyprus" },
        { "label": "Czech Republic", "value": "Czech  Republic"},
        { "label": "Denmark", "value": "Denmark" },
        { "label": "Djibouti", "value": "Djibouti" },
        { "label": "Dominica", "value": "Dominica" },
        { "label": "Dominican Republic", "value": "Dominican  Republic"},
        { "label": "East Timor", "value": "East  Timor"},
        { "label": "Ecuador", "value": "Ecuador" },
        { "label": "Egypt", "value": "Egypt" },
        { "label": "El Salvador", "value": "El  Salvador"},
        { "label": "Equatorial Guinea", "value": "Equatorial  Guinea"},
        { "label": "Eritrea", "value": "Eritrea" },
        { "label": "Estonia", "value": "Estonia" },
        { "label": "Ethiopia", "value": "Ethiopia" },
        { "label": "Fiji", "value": "Fiji" },
        { "label": "Finland", "value": "Finland" },
        { "label": "France", "value": "France" },
        { "label": "Gabon", "value": "Gabon" },
        { "label": "Gambia", "value": "Gambia" },
        { "label": "Georgia", "value": "Georgia" },
        { "label": "Germany", "value": "Germany" },
        { "label": "Ghana", "value": "Ghana" },
        { "label": "Greece", "value": "Greece" },
        { "label": "Grenada", "value": "Grenada" },
        { "label": "Guatemala", "value": "Guatemala" },
        { "label": "Guinea", "value": "Guinea" },
        { "label": "Guinea-Bissau", "value": "Guinea- Bissau"},
        { "label": "Guyana", "value": "Guyana" },
        { "label": "Haiti", "value": "Haiti" },
        { "label": "Honduras", "value": "Honduras" },
        { "label": "Hungary", "value": "Hungary" },
        { "label": "Iceland", "value": "Iceland" },
        { "label": "India", "value": "India" },
        { "label": "Indonesia", "value": "Indonesia" },
        { "label": "Iran", "value": "Iran" },
        { "label": "Iraq", "value": "Iraq" },
        { "label": "Ireland {Republic}", "value": "Ireland  {Republic}"},
        { "label": "Israel", "value": "Israel" },
        { "label": "Italy", "value": "Italy" },
        { "label": "Ivory Coast", "value": "Ivory  Coast"},
        { "label": "Jamaica", "value": "Jamaica" },
        { "label": "Japan", "value": "Japan" },
        { "label": "Jordan", "value": "Jordan" },
        { "label": "Kazakhstan", "value": "Kazakhstan" },
        { "label": "Kenya", "value": "Kenya" },
        { "label": "Kiribati", "value": "Kiribati" },
        { "label": "Korea North", "value": "Korea  North"},
        { "label": "Korea South", "value": "Korea  South"},
        { "label": "Kosovo", "value": "Kosovo" },
        { "label": "Kuwait", "value": "Kuwait" },
        { "label": "Kyrgyzstan", "value": "Kyrgyzstan" },
        { "label": "Laos", "value": "Laos" },
        { "label": "Latvia", "value": "Latvia" },
        { "label": "Lebanon", "value": "Lebanon" },
        { "label": "Lesotho", "value": "Lesotho" },
        { "label": "Liberia", "value": "Liberia" },
        { "label": "Libya", "value": "Libya" },
        { "label": "Liechtenstein", "value": "Liechtenstein" },
        { "label": "Lithuania", "value": "Lithuania" },
        { "label": "Luxembourg", "value": "Luxembourg" },
        { "label": "Macedonia", "value": "Macedonia" },
        { "label": "Madagascar", "value": "Madagascar" },
        { "label": "Malawi", "value": "Malawi" },
        { "label": "Malaysia", "value": "Malaysia" },
        { "label": "Maldives", "value": "Maldives" },
        { "label": "Mali", "value": "Mali" },
        { "label": "Malta", "value": "Malta" },
        { "label": "Marshall Islands", "value": "Marshall  Islands"},
        { "label": "Mauritania", "value": "Mauritania" },
        { "label": "Mauritius", "value": "Mauritius" },
        { "label": "Mexico", "value": "Mexico" },
        { "label": "Micronesia", "value": "Micronesia" },
        { "label": "Moldova", "value": "Moldova" },
        { "label": "Monaco", "value": "Monaco" },
        { "label": "Mongolia", "value": "Mongolia" },
        { "label": "Montenegro", "value": "Montenegro" },
        { "label": "Morocco", "value": "Morocco" },
        { "label": "Mozambique", "value": "Mozambique" },
        { "label": "Myanmar, {Burma}", "value": "Myanmar,  {Burma}"},
        { "label": "Namibia", "value": "Namibia" },
        { "label": "Nauru", "value": "Nauru" },
        { "label": "Nepal", "value": "Nepal" },
        { "label": "Netherlands", "value": "Netherlands" },
        { "label": "New Zealand", "value": "New  Zealand"},
        { "label": "Nicaragua", "value": "Nicaragua" },
        { "label": "Niger", "value": "Niger" },
        { "label": "Nigeria", "value": "Nigeria" },
        { "label": "Norway", "value": "Norway" },
        { "label": "Oman", "value": "Oman" },
        { "label": "Pakistan", "value": "Pakistan" },
        { "label": "Palau", "value": "Palau" },
        { "label": "Panama", "value": "Panama" },
        { "label": "Papua New Guinea", "value": "Papua  New Guinea"},
        { "label": "Paraguay", "value": "Paraguay" },
        { "label": "Peru", "value": "Peru" },
        { "label": "Philippines", "value": "Philippines" },
        { "label": "Poland", "value": "Poland" },
        { "label": "Portugal", "value": "Portugal" },
        { "label": "Qatar", "value": "Qatar" },
        { "label": "Romania", "value": "Romania" },
        { "label": "Russian Federation", "value": "Russian  Federation"},
        { "label": "Rwanda", "value": "Rwanda" },
        { "label": "St Kitts & Nevis", "value": "St  Kitts & Nevis"},
        { "label": "St Lucia", "value": "St  Lucia"},
        { "label": "Saint Vincent & the Grenadines", "value": "Saint  Vincent & the Grenadines"},
        { "label": "Samoa", "value": "Samoa" },
        { "label": "San Marino", "value": "San  Marino"},
        { "label": "Sao Tome & Principe", "value": "Sao  Tome & Principe"},
        { "label": "Saudi Arabia", "value": "Saudi  Arabia"},
        { "label": "Senegal", "value": "Senegal" },
        { "label": "Serbia", "value": "Serbia" },
        { "label": "Seychelles", "value": "Seychelles" },
        { "label": "Sierra Leone", "value": "Sierra  Leone"},
        { "label": "Singapore", "value": "Singapore" },
        { "label": "Slovakia", "value": "Slovakia" },
        { "label": "Slovenia", "value": "Slovenia" },
        { "label": "Solomon Islands", "value": "Solomon  Islands"},
        { "label": "Somalia", "value": "Somalia" },
        { "label": "South Africa", "value": "South  Africa"},
        { "label": "South Sudan", "value": "South  Sudan"},
        { "label": "Spain", "value": "Spain" },
        { "label": "Sri Lanka", "value": "Sri  Lanka"},
        { "label": "Sudan", "value": "Sudan" },
        { "label": "Suriname", "value": "Suriname" },
        { "label": "Swaziland", "value": "Swaziland" },
        { "label": "Sweden", "value": "Sweden" },
        { "label": "Switzerland", "value": "Switzerland" },
        { "label": "Syria", "value": "Syria" },
        { "label": "Taiwan", "value": "Taiwan" },
        { "label": "Tajikistan", "value": "Tajikistan" },
        { "label": "Tanzania", "value": "Tanzania" },
        { "label": "Thailand", "value": "Thailand" },
        { "label": "Togo", "value": "Togo" },
        { "label": "Tonga", "value": "Tonga" },
        { "label": "Trinidad & Tobago", "value": "Trinidad  & Tobago"},
        { "label": "Tunisia", "value": "Tunisia" },
        { "label": "Turkey", "value": "Turkey" },
        { "label": "Turkmenistan", "value": "Turkmenistan" },
        { "label": "Tuvalu", "value": "Tuvalu" },
        { "label": "Uganda", "value": "Uganda" },
        { "label": "Ukraine", "value": "Ukraine" },
        { "label": "United Arab Emirates", "value": "United  Arab Emirates"},
        { "label": "United Kingdom", "value": "United  Kingdom"},
        { "label": "United States", "value": "United  States"},
        { "label": "Uruguay", "value": "Uruguay" },
        { "label": "Uzbekistan", "value": "Uzbekistan" },
        { "label": "Vanuatu", "value": "Vanuatu" },
        { "label": "Vatican City", "value": "Vatican  City"},
        { "label": "Venezuela", "value": "Venezuela" },
        { "label": "Vietnam", "value": "Vietnam" },
        { "label": "Yemen", "value": "Yemen" },
        { "label": "Zambia", "value": "Zambia" },
        { "label": "Zimbabwe", "value": "Zimbabwe" }
    ];

    /* 
    *   This method is used to check if all the input fields 
    *   that we need to validate are valid or not. We're also going
    *   to populate our contact object so that it can be sent to apex
    *   in order to save the details in salesforce
    */
    isInputValid() {
        let isValid = true;
        let inputFields = this.template.querySelectorAll('.validate');
        inputFields.forEach(inputField => {
            if(!inputField.checkValidity()) {
                inputField.reportValidity();
                isValid = false;
            }
            this.contact[inputField.name] = inputField.value;
        });
        return isValid;
    }

    /* 
    *   This method is used to create a new contact in salesforce
    *   based on the values entered by the user. For now, our main
    *   purpose is validation so, we're just going to display the 
    *   contact object once it's validated to make sure that we 
    *   have all the fields and their values ready to be saved
    */
    createContact() {
        if(this.isInputValid()) {
            console.log(this.contact);
        }
    }
}