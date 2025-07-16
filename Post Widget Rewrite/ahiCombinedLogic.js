
if (location.pathname === "/availableaffordablehousing-centralflorida" || location.pathname === "/availableaffordablehousing-eastflorida" || location.pathname === "/availableaffordablehousing-westflorida") {

    function toggleAccordion(accordionId) {
        const accordionContent = document.getElementById(accordionId);
        accordionContent.classList.toggle("active");

        let allAccordions = document.querySelectorAll(".accordion-content");

        for (let i = 0; i < allAccordions.length; i++) {
            let accordion = allAccordions[i];

            if (accordion.id !== accordion.id) {
                accordion.classList.remove("active");
            }
        }
    }

     const centralTable = [

            { householdSize: "1", income: "$40,560" },
            { householdSize: "2", income: "$46,320" },
            { householdSize: "3", income: "$52,140" },
            { householdSize: "4", income: "$57,900" },
            { householdSize: "5", income: "$62,580" },
            { householdSize: "6", income: "$67,200" },
            { householdSize: "7", income: "$71,820" },
            { householdSize: "8", income: "$76,440" },
        ];

        const sumterTable = [

            { householdSize: "1", income: "$36,780" },
            { householdSize: "2", income: "$42,060" },
            { householdSize: "3", income: "$47,340" },
            { householdSize: "4", income: "$52,560" },
            { householdSize: "5", income: "$56,820" },
            { householdSize: "6", income: "$61,020" },
            { householdSize: "7", income: "$65,220" },
            { householdSize: "8", income: "$69,420" },
        ];

        /*eastTable contains the values for Martin and St Lucie Counties:*/
        const martinStLucieTable = [

            { householdSize: "1", income: "$38,520" },
            { householdSize: "2", income: "$44,040" },
            { householdSize: "3", income: "$49,560" },
            { householdSize: "4", income: "$55,020" },
            { householdSize: "5", income: "$59,460" },
            { householdSize: "6", income: "$63,840" },
            { householdSize: "7", income: "$68,280" },
            { householdSize: "8", income: "$72,660" },
        ];


        const volusiaTable = [

            { householdSize: "1", income: "$34,800" },
            { householdSize: "2", income: "$39,780" },
            { householdSize: "3", income: "$44,760" },
            { householdSize: "4", income: "$49,680" },
            { householdSize: "5", income: "$53,700" },
            { householdSize: "6", income: "$57,660" },
            { householdSize: "7", income: "$61,620" },
            { householdSize: "8", income: "$65,580" },
        ];
        const brevardTable = [

            { householdSize: "1", income: "$39,720" },
            { householdSize: "2", income: "$45,360" },
            { householdSize: "3", income: "$51,060" },
            { householdSize: "4", income: "$56,760" },
            { householdSize: "5", income: "$61,260" },
            { householdSize: "6", income: "$65,820" },
            { householdSize: "7", income: "$70,380" },
            { householdSize: "8", income: "$74,940" },
        ];

        const flaglerTable = [

            { householdSize: "1", income: "$36,480" },
            { householdSize: "2", income: "$41,700" },
            { householdSize: "3", income: "$46,920" },
            { householdSize: "4", income: "$52,140" },
            { householdSize: "5", income: "$56,340" },
            { householdSize: "6", income: "$60,480" },
            { householdSize: "7", income: "$64,680" },
            { householdSize: "8", income: "$68,820" },
        ];

        /*Below is where you would update the values for eligibility tables. You only need to update the value in the income column and not any of the functions below */

        const westTable = [
            { householdSize: "1", income: "$40,140" },
            { householdSize: "2", income: "$45,840" },
            { householdSize: "3", income: "$51,600" },
            { householdSize: "4", income: "$57,300" },
            { householdSize: "5", income: "$61,920" },
            { householdSize: "6", income: "$66,480" },
            { householdSize: "7", income: "$71,100" },
            { householdSize: "8", income: "$75,660" },
        ];


        const sarasotaTable = [

            { householdSize: "1", income: "$42,240" },
            { householdSize: "2", income: "$48,240" },
            { householdSize: "3", income: "$54,300" },
            { householdSize: "4", income: "$60,300" },
            { householdSize: "5", income: "$65,160" },
            { householdSize: "6", income: "$69,960" },
            { householdSize: "7", income: "$74,820" },
            { householdSize: "8", income: "$79,620" },
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


/*Table data selected based on the county specified. County name is CASE SENSITIVE and must include the word County:*/
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
 )}
