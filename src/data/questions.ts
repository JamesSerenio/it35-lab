export const questions = {
  sql: {
    level1: [
      {
        question: "What is the purpose of the SQL SELECT statement?",
        options: ["To delete records", "To select records", "To update records"],
        answer: "To select records",
      },
      {
        question: "Which SQL statement is used to insert data into a table?",
        options: ["INSERT INTO", "INSERT DATA", "ADD INTO"],
        answer: "INSERT INTO",
      },
      {
        question: "Which clause is used to filter records in SQL?",
        options: ["WHERE", "FILTER", "SELECT"],
        answer: "WHERE",
      },
      {
        question: "Which SQL keyword is used to return distinct values?",
        options: ["DISTINCT", "UNIQUE", "SEPARATE"],
        answer: "DISTINCT",
      },
      {
        question: "How do you sort the result of a query in SQL?",
        options: ["ORDER BY", "SORT BY", "ARRANGE BY"],
        answer: "ORDER BY",
      },
    ],
    level2: [
      {
        question: "What is the correct SQL syntax to retrieve all columns from a table named 'users'?",
        options: [
          "SELECT * FROM users;",
          "SELECT users FROM *;",
          "SELECT all FROM users;",
        ],
        answer: "SELECT * FROM users;",
      },
      {
        question: "Which SQL statement is used to update data in a table?",
        options: ["UPDATE", "MODIFY", "CHANGE"],
        answer: "UPDATE",
      },
      {
        question: "What type of join returns all records from the left table, and the matched records from the right table?",
        options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN"],
        answer: "LEFT JOIN",
      },
      {
        question: "What is the purpose of the SQL GROUP BY clause?",
        options: ["Group the results by one or more columns", "Filter records", "Sort the result"],
        answer: "Group the results by one or more columns",
      },
      {
        question: "How do you remove duplicate records in a query?",
        options: ["DISTINCT", "REMOVE DUPLICATES", "DELETE"],
        answer: "DISTINCT",
      },
    ],
    level3: [
      {
        question: "Which SQL command is used to remove records from a table?",
        options: ["DELETE", "DROP", "REMOVE"],
        answer: "DELETE",
      },
      {
        question: "Which SQL function is used to count the number of rows in a table?",
        options: ["COUNT()", "ROWS()", "SUM()"],
        answer: "COUNT()",
      },
      {
        question: "What is the correct SQL statement to create a new table?",
        options: [
          "CREATE TABLE table_name;",
          "NEW TABLE table_name;",
          "MAKE TABLE table_name;",
        ],
        answer: "CREATE TABLE table_name;",
      },
      {
        question: "What is the default sorting order of the ORDER BY clause?",
        options: ["Ascending", "Descending", "Random"],
        answer: "Ascending",
      },
      {
        question: "Which SQL statement is used to delete a table?",
        options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE"],
        answer: "DROP TABLE",
      },
    ],
    level4: [
      {
        question: "How do you add a new column to an existing table in SQL?",
        options: [
          "ALTER TABLE ADD COLUMN column_name datatype;",
          "ADD COLUMN table_name column_name datatype;",
          "MODIFY TABLE column_name datatype;",
        ],
        answer: "ALTER TABLE ADD COLUMN column_name datatype;",
      },
      {
        question: "What is the purpose of a foreign key in SQL?",
        options: [
          "To link two tables together",
          "To enforce data integrity",
          "To define the primary key of a table",
        ],
        answer: "To link two tables together",
      },
      {
        question: "Which SQL keyword is used to prevent duplicate records in a result?",
        options: ["DISTINCT", "UNIQUE", "REMOVE"],
        answer: "DISTINCT",
      },
      {
        question: "Which command is used to add constraints to an existing table?",
        options: ["ALTER TABLE", "MODIFY TABLE", "ADD CONSTRAINT"],
        answer: "ALTER TABLE",
      },
      {
        question: "Which SQL function is used to retrieve the highest value in a column?",
        options: ["MAX()", "MIN()", "SUM()"],
        answer: "MAX()",
      },
    ],
    level5: [
      {
        question: "What is a subquery in SQL?",
        options: [
          "A query inside another query",
          "A table inside another table",
          "A query that retrieves data from a sub-table",
        ],
        answer: "A query inside another query",
      },
      {
        question: "Which SQL function is used to calculate the average value of a column?",
        options: ["AVG()", "SUM()", "COUNT()"],
        answer: "AVG()",
      },
      {
        question: "What is the purpose of the SQL HAVING clause?",
        options: [
          "To filter groups after the GROUP BY",
          "To filter records before the GROUP BY",
          "To group records by columns",
        ],
        answer: "To filter groups after the GROUP BY",
      },
      {
        question: "Which SQL keyword is used to return the last inserted id in a table?",
        options: ["LAST_INSERT_ID()", "AUTO_INCREMENT", "GET_LAST_ID()"],
        answer: "LAST_INSERT_ID()",
      },
      {
        question: "What is a primary key in SQL?",
        options: [
          "A unique identifier for each record in a table",
          "A foreign key reference to another table",
          "A unique value for a column",
        ],
        answer: "A unique identifier for each record in a table",
      },
    ],
  },

  frontend: {
    level1: [
      {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HyperTool Markup Language", "Home Tool Markup Language"],
        answer: "HyperText Markup Language",
      },
      {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>"],
        answer: "<a>",
      },
      {
        question: "Which element is used to define a paragraph in HTML?",
        options: ["<p>", "<para>", "<text>"],
        answer: "<p>",
      },
      {
        question: "Which tag is used to display an image in HTML?",
        options: ["<img>", "<image>", "<picture>"],
        answer: "<img>",
      },
      {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<br>", "<lb>", "<break>"],
        answer: "<br>",
      },
    ],
    level2: [
      {
        question: "Which HTML tag is used to define an image?",
        options: ["<image>", "<img>", "<src>"],
        answer: "<img>",
      },
      {
        question: "Which tag is used to make text bold in HTML?",
        options: ["<b>", "<strong>", "<bold>"],
        answer: "<b>",
      },
      {
        question: "Which tag is used to define a list in HTML?",
        options: ["<ul>", "<list>", "<ol>"],
        answer: "<ul>",
      },
      {
        question: "How do you link an external CSS file in HTML?",
        options: ["<link rel='stylesheet' href='style.css'>", "<css src='style.css'>", "<style src='style.css'>"],
        answer: "<link rel='stylesheet' href='style.css'>",
      },
      {
        question: "What is the correct HTML tag to insert a table?",
        options: ["<table>", "<tab>", "<tr>"],
        answer: "<table>",
      },
    ],
    level3: [
      {
        question: "Which property is used to change the background color in CSS?",
        options: ["background-color", "color", "bgcolor"],
        answer: "background-color",
      },
      {
        question: "Which CSS property controls the layout of a page?",
        options: ["display", "position", "layout"],
        answer: "display",
      },
      {
        question: "What is the correct CSS syntax to change the font size?",
        options: ["font-size: 16px;", "font: 16px;", "size: 16px;"],
        answer: "font-size: 16px;",
      },
      {
        question: "Which property is used to create space between elements in CSS?",
        options: ["margin", "padding", "spacing"],
        answer: "margin",
      },
      {
        question: "Which CSS property is used to set the text color?",
        options: ["color", "text-color", "font-color"],
        answer: "color",
      },
    ],
    level4: [
      {
        question: "Which property is used to set the width of an element in CSS?",
        options: ["width", "size", "measure"],
        answer: "width",
      },
      {
        question: "Which CSS property is used to add shadow to text?",
        options: ["text-shadow", "shadow-text", "shadow"],
        answer: "text-shadow",
      },
      {
        question: "What is the purpose of the CSS float property?",
        options: ["To float the element left or right", "To align text", "To change the background color"],
        answer: "To float the element left or right",
      },
      {
        question: "Which property is used to control the opacity of an element in CSS?",
        options: ["opacity", "visibility", "transparency"],
        answer: "opacity",
      },
      {
        question: "How do you center an element horizontally using CSS?",
        options: ["margin: 0 auto;", "center: auto;", "align: center;"],
        answer: "margin: 0 auto;",
      },
    ],
    level5: [
      {
        question: "What is React used for?",
        options: ["Building user interfaces", "Styling web pages", "Writing backend code"],
        answer: "Building user interfaces",
      },
      {
        question: "What does JSX stand for in React?",
        options: ["JavaScript XML", "JavaScript Extended", "JSON XML"],
        answer: "JavaScript XML",
      },
      {
        question: "What is the purpose of the state in React?",
        options: ["To store data that can change over time", "To display static content", "To create new components"],
        answer: "To store data that can change over time",
      },
      {
        question: "Which of the following is used to create components in React?",
        options: ["function", "class", "Both"],
        answer: "Both",
      },
      {
        question: "Which lifecycle method is called once the component is mounted in React?",
        options: ["componentDidMount", "render", "componentWillMount"],
        answer: "componentDidMount",
      },
    ],
  },
  hardware: {
    level1: [
      {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Processing Unit", "Central Performance Unit", "Computer Power Unit"],
        answer: "Central Processing Unit"
      },
      {
        question: "Which of the following is considered hardware?",
        options: ["Microsoft Word", "CPU", "Photoshop", "Windows 11"],
        answer: "CPU"
      },
      {
        question: "What is the primary function of RAM?",
        options: ["Long-term storage", "Store power", "Temporary data storage", "Graphics rendering"],
        answer: "Temporary data storage"
      },
      {
        question: "What is an example of an input device?",
        options: ["Monitor", "Printer", "Mouse", "Speaker"],
        answer: "Mouse"
      },
      {
        question: "Which part is responsible for displaying visual output?",
        options: ["Motherboard", "Monitor", "Hard drive", "Keyboard"],
        answer: "Monitor"
      }
    ],
    level2: [
      {
        question: "Which connector is used to connect monitors to computers?",
        options: ["HDMI", "USB", "Ethernet", "VGA"],
        answer: "HDMI"
      },
      {
        question: "What does SSD stand for?",
        options: ["Super Storage Device", "Solid State Drive", "Speedy Storage Disk", "Static Storage Disk"],
        answer: "Solid State Drive"
      },
      {
        question: "Which of these is a volatile memory?",
        options: ["RAM", "SSD", "HDD", "CD-ROM"],
        answer: "RAM"
      },
      {
        question: "Which part connects all components of a computer?",
        options: ["RAM", "CPU", "Motherboard", "Hard Drive"],
        answer: "Motherboard"
      },
      {
        question: "What is the main purpose of a power supply unit (PSU)?",
        options: ["Increase voltage", "Generate power", "Supply power to components", "Store energy"],
        answer: "Supply power to components"
      }
    ],
    level3: [
      {
        question: "Which memory type is non-volatile and used for permanent storage?",
        options: ["RAM", "ROM", "Cache", "Register"],
        answer: "ROM"
      },
      {
        question: "Which port is typically used for internet connection?",
        options: ["HDMI", "VGA", "Ethernet", "Audio jack"],
        answer: "Ethernet"
      },
      {
        question: "Which device is used to cool down a CPU?",
        options: ["Heatsink", "Modem", "Router", "Monitor"],
        answer: "Heatsink"
      },
      {
        question: "Which expansion slot is commonly used for graphics cards?",
        options: ["PCIe", "AGP", "IDE", "SATA"],
        answer: "PCIe"
      },
      {
        question: "Which is faster: SSD or HDD?",
        options: ["HDD", "SSD", "They are the same", "CD-ROM"],
        answer: "SSD"
      }
    ],
    level4: [
      {
        question: "What is the function of BIOS?",
        options: ["Run applications", "Manage internet", "Boot up the computer", "Backup data"],
        answer: "Boot up the computer"
      },
      {
        question: "Which of the following is used for storing the operating system?",
        options: ["RAM", "Cache", "Hard Disk", "GPU"],
        answer: "Hard Disk"
      },
      {
        question: "Which device allows communication between computers on a network?",
        options: ["CPU", "Router", "RAM", "Monitor"],
        answer: "Router"
      },
      {
        question: "Which is used to increase computer performance temporarily?",
        options: ["RAM", "ROM", "SSD", "HDD"],
        answer: "RAM"
      },
      {
        question: "What is a GPU primarily used for?",
        options: ["Processing graphics", "Cooling CPU", "Power distribution", "Audio playback"],
        answer: "Processing graphics"
      }
    ],
    level5: [
      {
        question: "Which part is essential for overclocking?",
        options: ["Motherboard", "CPU", "Power Supply", "Cooling system"],
        answer: "Cooling system"
      },
      {
        question: "What is the main purpose of thermal paste?",
        options: ["Increase performance", "Conduct electricity", "Help heat transfer", "Prevent static"],
        answer: "Help heat transfer"
      },
      {
        question: "Which RAID configuration offers mirroring?",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: "RAID 1"
      },
      {
        question: "Which hardware converts digital signals to analog?",
        options: ["Modem", "Router", "Switch", "Hub"],
        answer: "Modem"
      },
      {
        question: "Which connector is most common for external hard drives?",
        options: ["VGA", "USB", "HDMI", "Ethernet"],
        answer: "USB"
      },
    ],
  },
};

export default questions;
