var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT - Superior Roboworks",
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
        "Butterfly/GrassHopper": "Butterfly/Grashopper<br>",
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
    { "name": "Turret Number/Width",
      "code": "tnw",
      "type": "radio",
      "choices": {
        "1": "Single Turret<br>",
        "2": "Double Turret/2 Wide Dumper<br>",
        "3": "Triple Turret/3 Wide Dumper<br>",
        "4": "4 Wide Dumper<br>",
        "Other": "Other ratio (put in comments)<br>",
      },
      "defaultValue":"Other"
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "Neo": "Neo<br>",
        "Falcon": "Falcon<br>",
        "CIM": "CIM<br>",
        "Kraken": "Kraken<br>"
      },
      "defaultValue":"n"
    },
    { "name": "# of Batteries",
      "code": "nob",
      "type": "number"
    },
    { "name": "Floor pickup Fuel",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Depot pickup Fuel (Square thing on Floor)",
      "code": "dpu",
      "type": "bool"
    },
    { "name": "Outpost pickup Fuel (Human Player Station",
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
