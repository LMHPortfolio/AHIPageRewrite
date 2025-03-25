/*Below is where you would update the values for eligibility tables. You only need to update the value in the income column and not any of the functions below */

if (window.location.href.includes('/availableaffordablehousing')) {

    const centralTable = [

        { 'householdSize': '1', 'income': '$36,900' },
        { 'householdSize': '2', 'income': '$42,180' },
        { 'householdSize': '3', 'income': '$47,460' },
        { 'householdSize': '4', 'income': '$52,680' },
        { 'householdSize': '5', 'income': '$56,940' },
        { 'householdSize': '6', 'income': '$61,140' },
        { 'householdSize': '7', 'income': '$65,340' },
        { 'householdSize': '8', 'income': '$69,540' },
    ];

    const sumterTable = [

        { 'householdSize': '1', 'income': '$33,480' },
        { 'householdSize': '2', 'income': '$38,280' },
        { 'householdSize': '3', 'income': '$43,080' },
        { 'householdSize': '4', 'income': '$47,820' },
        { 'householdSize': '5', 'income': '$51,660' },
        { 'householdSize': '6', 'income': '$55,500' },
        { 'householdSize': '7', 'income': '$59,340' },
        { 'householdSize': '8', 'income': '$63,180' },
    ];

//eastTable contains the values for Martin and St Lucie Counties:
    const martinStLucieTable = [

        { 'householdSize': '1', 'income': '$35,580' },
        { 'householdSize': '2', 'income': '$40,680' },
        { 'householdSize': '3', 'income': '$45,780' },
        { 'householdSize': '4', 'income': '$50,820' },
        { 'householdSize': '5', 'income': '$54,900' },
        { 'householdSize': '6', 'income': '$58,980' },
        { 'householdSize': '7', 'income': '$63,060' },
        { 'householdSize': '8', 'income': '$67,140' },
    ];


    const volusiaTable = [

        { 'householdSize': '1', 'income': '$32,520' },
        { 'householdSize': '2', 'income': '$37,200' },
        { 'householdSize': '3', 'income': '$41,820' },
        { 'householdSize': '4', 'income': '$46,440' },
        { 'householdSize': '5', 'income': '$50,160' },
        { 'householdSize': '6', 'income': '$53,880' },
        { 'householdSize': '7', 'income': '$57,680' },
        { 'householdSize': '8', 'income': '$61,320' },
    ];
    const brevardTable = [

        { 'householdSize': '1', 'income': '$36,120' },
        { 'householdSize': '2', 'income': '$41,280' },
        { 'householdSize': '3', 'income': '$46,440' },
        { 'householdSize': '4', 'income': '$51,600' },
        { 'householdSize': '5', 'income': '$55,740' },
        { 'householdSize': '6', 'income': '$59,880' },
        { 'householdSize': '7', 'income': '$64,020' },
        { 'householdSize': '8', 'income': '$68,160' },
    ];

    const flaglerTable = [

        { 'householdSize': '1', 'income': '$33,180' },
        { 'householdSize': '2', 'income': '$37,920' },
        { 'householdSize': '3', 'income': '$42,660' },
        { 'householdSize': '4', 'income': '$47,400' },
        { 'householdSize': '5', 'income': '$51,240' },
        { 'householdSize': '6', 'income': '$55,020' },
        { 'householdSize': '7', 'income': '$58,800' },
        { 'householdSize': '8', 'income': '$62,580' },
    ];

    /*Below is where you would update the values for eligibility tables. You only need to update the value in the income column and not any of the functions below */

    const westTable = [

        { 'householdSize': '1', 'income': '$36,540' },
        { 'householdSize': '2', 'income': '$41,760' },
        { 'householdSize': '3', 'income': '$46,980' },
        { 'householdSize': '4', 'income': '$52,140' },
        { 'householdSize': '5', 'income': '$56,340' },
        { 'householdSize': '6', 'income': '$60,540' },
        { 'householdSize': '7', 'income': '$64,680' },
        { 'householdSize': '8', 'income': '$68,880' },
    ];


    const sarasotaTable = [

        { 'householdSize': '1', 'income': '$38,400' },
        { 'householdSize': '2', 'income': '$43,920' },
        { 'householdSize': '3', 'income': '$49,380' },
        { 'householdSize': '4', 'income': '$54,840' },
        { 'householdSize': '5', 'income': '$59,280' },
        { 'householdSize': '6', 'income': '$63,660' },
        { 'householdSize': '7', 'income': '$68,040' },
        { 'householdSize': '8', 'income': '$72,420' },
    ];



//Table element generator:

    function generateTable(tableData) {

        const tbody = document.createElement('tbody');
        tbody.classList.add('tbody');

        const tableRows = tableData.map(({ householdSize, income }) => {
            const row = document.createElement('tr');
            row.classList.add('tr');

            const cell1 = document.createElement('td');
            cell1.classList.add('td-not-bootstrap');
            cell1.innerHTML = householdSize;
            row.appendChild(cell1);

            const cell2 = document.createElement('td');
            cell2.classList.add('td-not-bootstrap');
            cell2.innerHTML = income;
            row.appendChild(cell2);

            return row;
        });

        tableRows.forEach((tableRow) => {
            tbody.appendChild(tableRow);
        });

        return tbody;
    }


//Table data selected based on the county specified. County name is CASE SENSITIVE and must include the word County:
document.addEventListener("DOMContentLoaded", () => {
    let counties = document.querySelectorAll('.countyName');

    for (let i=0; i<counties.length; i++) {
        let tableContainer = counties[i].parentElement.querySelector('.tbody-container');

        if (tableContainer) {
            switch (counties[i].innerHTML) {
                case 'Martin County':
                case 'St Lucie County':
                    const generatedTableMartinStLucie = generateTable(martinStLucieTable);
                    tableContainer.appendChild(generatedTableMartinStLucie);
                    break;
                case 'Volusia County':
                    const generatedTableVolusia = generateTable(volusiaTable);
                    tableContainer.appendChild(generatedTableVolusia);
                    break;
                case 'Brevard County':
                    const generatedTableBrevard = generateTable(brevardTable);
                    tableContainer.appendChild(generatedTableBrevard);
                    break;
                case 'Flagler County':
                    const generatedTableFlagler = generateTable(flaglerTable);
                    tableContainer.appendChild(generatedTableFlagler);
                    break;
                case 'Lake County':
                case 'Orange County':
                case 'Osceola County':
                case 'Seminole County':
                    const generatedTableCentral = generateTable(centralTable);
                    tableContainer.appendChild(generatedTableCentral);
                    break;
                case 'Sumter County':
                    const generatedTableSumter = generateTable(sumterTable);
                    tableContainer.appendChild(generatedTableSumter);
                    break;
                case 'Hernando County':
                case 'Hillsborough County':
                case 'Pasco County':
                case 'Pinellas County':
                    const generatedTableWest = generateTable(westTable);
                    tableContainer.appendChild(generatedTableWest);
                    break;
                case 'Sarasota County':
                    const generatedTableSarasota = generateTable(sarasotaTable);
                    tableContainer.appendChild(generatedTableSarasota);
                    break;
                default:
                    console.log('no table match found');
                    break;
            }
        } else {
            console.log('no .tbody-container found for', counties[i].innerHTML);
        }

    }


   }
 }
