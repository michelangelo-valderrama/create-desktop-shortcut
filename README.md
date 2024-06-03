# Desktop Shortcut Creator

CLI to create desktop shortcuts in Ubuntu.

## Usage

```sh
npx create-desktop-shortcut obsidian.AppImage -n Obsidian -i obsidian-512.png -c Office Utility
# Shortcut created at '/home/user/.local/shared/applications/obsidian.desktop'
```

## Docs

```sh
Usage: create-desktop-shortcut create [options] <path>

Create a new shortcut

Arguments:
  path                              path to the executable

Options:
  -n, --name <name>                 name of the shortcut
  -t, --terminal                    run the executable in a terminal (default: false)
  -s, --startup-notify              show a notification when the shortcut is launched (default: false)
  -i, --icon <icon>                 path to the icon file
  -co, --comment <comment>          comment for the shortcut
  -c, --categories <categories...>  category of the shortcut (choices: "Audio", "AudioVideo",
                                    "Development", "Education", "Game", "Graphics", "Network",
                                    "Office", "Settings", "Utility", "Video", "2DGraphics",
                                    "3DGraphics", "Accessibility", "ActionGame", "AdventureGame",
                                    "Amusement", "ArcadeGame", "Archiving", "Art",
                                    "ArtificialIntelligence", "Astronomy", "AudioVideoEditing",
                                    "Biology", "BlocksGame", "BoardGame", "Building",
                                    "Calculator", "Calendar", "CardGame", "Chart", "Chat",
                                    "Chemistry", "Clock", "Compression", "ComputerScience",
                                    "ConsoleOnly", "Construction", "ContactManagement", "Core",
                                    "Database", "DataVisualization", "Debugger",
                                    "DesktopSettings", "Dialup", "Dictionary", "DiscBurning",
                                    "Documentation", "Economy", "Electricity", "Electronics",
                                    "Email", "Emulator", "Engineering", "FileManager",
                                    "Filesystem", "FileTools", "FileTransfer", "Finance",
                                    "FlowChart", "Geography", "Geology", "Geoscience", "GNOME",
                                    "GTK", "GUIDesigner", "HamRadio", "HardwareSettings",
                                    "History", "IDE", "ImageProcessing", "InstantMessaging",
                                    "IRCClient", "Java", "KDE", "KidsGame", "Languages",
                                    "Literature", "LogicGame", "Math", "MedicalSoftware", "Midi",
                                    "Mixer", "Monitor", "Motif", "Music", "News",
                                    "NumericalAnalysis", "OCR", "P2P", "PackageManager",
                                    "ParallelComputing", "PDA", "Photography", "Physics",
                                    "Player", "Presentation", "Printing", "Profiling",
                                    "ProjectManagement", "Publishing", "Qt", "RasterGraphics",
                                    "Recorder", "RemoteAccess", "RevisionControl", "Robotics",
                                    "RolePlaying", "Scanning", "Science", "Security",
                                    "Sequencer", "Simulation", "Sports", "SportsGame",
                                    "Spreadsheet", "StrategyGame", "Telephony", "TelephonyTools",
                                    "TerminalEmulator", "TextEditor", "TextTools", "Translation",
                                    "Tuner", "TV", "VectorGraphics", "VideoConference", "Viewer",
                                    "WebBrowser", "WebDevelopment", "WordProcessor", default:
                                    ["Utility"])
  -h, --help                        display help for command
```

## Categories

- Main categories:
  ```sh
  AudioVideo
  Audio
  Video
  Development
  Education
  Game
  Graphics
  Network
  Office
  Settings
  Utility
  ```
- Additional categories:
  ```sh
  Building
  Debugger
  IDE
  GUIDesigner
  Profiling
  RevisionControl
  Translation
  Calendar
  ContactManagement
  Database
  Dictionary
  Chart
  Email
  Finance
  FlowChart
  PDA
  ProjectManagement
  Presentation
  Spreadsheet
  WordProcessor
  2DGraphics
  VectorGraphics
  RasterGraphics
  3DGraphics
  Scanning
  OCR
  Photography
  Publishing
  Viewer
  TextTools
  DesktopSettings
  HardwareSettings
  Printing
  PackageManager
  Dialup
  InstantMessaging
  Chat
  IRCClient
  FileTransfer
  HamRadio
  News
  P2P
  RemoteAccess
  Telephony
  TelephonyTools
  VideoConference
  WebBrowser
  WebDevelopment
  Midi
  Mixer
  Sequencer
  Tuner
  TV
  AudioVideoEditing
  Player
  Recorder
  DiscBurning
  ActionGame
  AdventureGame
  ArcadeGame
  BoardGame
  BlocksGame
  CardGame
  KidsGame
  LogicGame
  RolePlaying
  Simulation
  SportsGame
  StrategyGame
  Art
  Construction
  Music
  Languages
  Science
  ArtificialIntelligence
  Astronomy
  Biology
  Chemistry
  ComputerScience
  DataVisualization
  Economy
  Electricity
  Geography
  Geology
  Geoscience
  History
  ImageProcessing
  Literature
  Math
  NumericalAnalysis
  MedicalSoftware
  Physics
  Robotics
  Sports
  ParallelComputing
  Amusement
  Archiving
  Compression
  Electronics
  Emulator
  Engineering
  FileTools
  FileManager
  TerminalEmulator
  Filesystem
  Monitor
  Security
  Accessibility
  Calculator
  Clock
  TextEditor
  Documentation
  Core
  KDE
  GNOME
  GTK
  Qt
  Motif
  Java
  ConsoleOnly
  ```
