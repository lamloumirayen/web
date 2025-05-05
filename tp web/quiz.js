function checkAnswers() {
    let score = 0;
    let textalert = "Résultat:\n";

    const q1 = document.getElementsByName("x");
    if (q1[1].checked) {
        textalert += "Q1: Bonne réponse\n";
        score += 10;
    } else {
        textalert += "Q1: Réponse fausse\n";
    }

    const q2 = document.getElementsByName("x1");
    if (q2[1].checked && !q2[0].checked && !q2[2].checked && !q2[3].checked) {
        textalert += "Q2: Bonne réponse\n";
        score += 10;
    } else {
        textalert += "Q2: Réponse fausse\n";
    }

    const q3 = document.getElementsByName("x2");
    if (q3[0].checked) {
        textalert += "Q3: Bonne réponse\n";
        score += 10;
    } else {
        textalert += "Q3: Réponse fausse\n";
    }

    const q4 = document.getElementsByName("x3");
    if (q4[1].checked && !q4[0].checked && !q4[2].checked && !q4[3].checked) {
        textalert += "Q4: Bonne réponse\n";
        score += 10;
    } else {
        textalert += "Q4: Réponse fausse\n";
    }

    const q5 = document.getElementsByName("x4");
    if (q5[0].checked) {
        textalert += "Q5: Bonne réponse\n";
        score += 10;
    } else {
        textalert += "Q5: Réponse fausse\n";
    }

    const q6 = document.getElementsByName("x5");
    if (q6[0].checked && q6[3].checked && !q6[1].checked && !q6[2].checked) {
        textalert += "Q6: Bonne réponse\n";
        score += 10;
    } else {
        textalert += "Q6: Réponse fausse\n";
    }

    const q7 = document.getElementsByName("x6");
    if (q7[0].checked) {
        textalert += "Q7: Bonne réponse\n";
        score += 10;
    } else {
        textalert += "Q7: Réponse fausse\n";
    }

    const q8 = document.getElementsByName("x7");
    if (q8[1].checked && q8[2].checked && !q8[0].checked && !q8[3].checked) {
        textalert += "Q8: Bonne réponse\n";
        score += 10;
    } else {
        textalert += "Q8: Réponse fausse\n";
    }

    const q9 = document.getElementsByName("x8");
    if (q9[1].checked) {
        textalert += "Q9: Bonne réponse\n";
        score += 10;
    } else {
        textalert += "Q9: Réponse fausse\n";
    }

    const q10 = document.getElementsByName("x9");
    if (q10[1].checked && q10[2].checked && !q10[0].checked) {
        textalert += "Q10: Bonne réponse\n";
        score += 10;
    } else {
        textalert += "Q10: Réponse fausse\n";
    }

    alert(textalert);
    alert("Score total: " + score + " / 100");
}
