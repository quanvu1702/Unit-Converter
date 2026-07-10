# Unit-Converter

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Unit Converter</h1>
        <nav>
            <ul>
                <li><a href="#Length">Length</a></li>
                <li><a href="#Weight">Weight</a></li>
                <li><a href="#Temperature">Temperature</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="Length">
            <h2>Enter the length to convert</h2>
            <form id="lengthForm">
                <label for="lengthInput">Length:</label>
                <input type="number" id="lengthInput" name="lengthInput" required>
                <select id="lengthUnit">
                    <option value="meters">Meters</option>
                    <option value="kilometers">Kilometers</option>
                    <option value="miles">Miles</option>
                    <option value="feet">Feet</option>
                </select>
                <button type="submit">Convert</button>
        </secttion>
        <section id="Weight">
            <h2>Enter the weight to convert</h2>
            <form id="weightForm">
                <label for="weightInput">Weight:</label>
                <input type="number" id="weightInput" name="weightInput" required>
                <select id="weightUnit">
                    <option value="kilograms">Kilograms</option>
                    <option value="grams">Grams</option>
                    <option value="pounds">Pounds</option>
                    <option value="ounces">Ounces</option>
                </select>
                <button type="submit">Convert</button>
            </form>
        </section>
        <section id="Temperature">
            <h2>Enter the temperature to convert</h2>
            <form id="temperatureForm">
                <label for="temperatureInput">Temperature:</label>
                <input type="number" id="temperatureInput" name="temperatureInput" required>
                <select id="temperatureUnit">
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select>
                <button type="submit">Convert</button>
            </form>
        </section>
        <section id="results">
            <h2>Result of your conversion</h2>
            <div id="lengthResult"></div>
            <div id="weightResult"></div>
            <div id="temperatureResult"></div>
        </section>
    </main>
    <footer>
        <p>&copy; 2026 My Website. All rights reserved.</p>


[project link]: https://roadmap.sh/projects/unit-converter
