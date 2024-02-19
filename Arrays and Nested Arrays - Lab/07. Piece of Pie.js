function pieceOfPie(pies, startPie, endingPie) {
    const start = pies.indexOf(startPie);
    const end = pies.indexOf(endingPie);
    return pies.slice(start, end + 1);
}
pieceOfPie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'], 'Key Lime Pie', 'Lemon Meringue Pie');
pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie');