var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "Swerve": "Swerve<br>",
        "Tank": "West Coast/Tank<br>",
        "Butterfly": "Butterfly/Grashopper<br>",
        "Mechanum": "Mechanum<br>",
        "Other": "Other"
      },
      "defaultValue": "Other"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Turret Width",
      "code": "tn",
      "type": "radio",
      "choices": {
        "1": "1 Ball/Single Turret<br>",
        "2": "2 Balls/Double Turret<br>",
        "3": "3 Balls/Triple Turret<br>",
        "4": "4 Balls/Full Size<br>",
        "Other": "Other(put in comments)<br>",
      },
      "defaultValue":"1"
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "Neo": "Neo<br>",
        "Falcon": "Falcon<br>",
        "CIM": "CIM<br>",
        "Other": "Other<br>"
      },
      "defaultValue":"Other"
    },
    { "name": "# of Batteries",
      "code": "nob",
      "type": "number"
    },
    { "name": "Floor pickup Fuel",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Depot pickup Fuel",
      "code": "dpu",
      "type": "bool"
    },
    { "name": "Outpost pickup Fuel",
      "code": "opu",
      "type": "bool"
    },
    { "name": "Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Scouting Method /<br>Program (ScoutingPASS?)",
      "code": "sct",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
