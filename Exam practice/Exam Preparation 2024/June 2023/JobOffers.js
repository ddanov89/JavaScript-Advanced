class JobOffers {

    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        candidates.map(p => {
            let [name, education, yearsExpirience] = p.split('-');

            let candidate = this.jobCandidates.find(p => p.name == name);
            if (candidate) {
                if (candidate.yearsExpirience < yearsExpirience) {
                    candidate.yearsExpirience = yearsExpirience;
                }
            } else {
                this.jobCandidates .push({ name,  education, yearsExpirience });
            }
        });
        let result = [];
        this.jobCandidates .map(p => {
            result.push(p.name);
        });
        return `You successfully added candidates: ${result.join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        let hiredPerson = '';

        
            let [name, minimalExpirience] = chosenPerson.split('-');
            minimalExpirience = Number(minimalExpirience);
            let person = this.jobCandidates .find(a => a.name == name);
            if (person) {

                if (person.yearsExpirience < minimalExpirience) {
                    throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExpirience} years.`)
                }
                else {
                    person.yearsExpirience = 'hired';
                    hiredPerson = person.name;
                }
            } else {
                throw new Error(`${name} is not in the candidates list!"`)
            }


        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        let candidate = this.jobCandidates .find(a => a.name == name);
        if (candidate) {
            if (candidate.education == 'Bachelor') {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
            } else if (candidate.education == 'Master') {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`        
            }else if (candidate.education != 'Master' || candidate.education != 'Bachelor') {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`        
            }
        } else {
            throw new Error(`${name} is not in the candidates list!`)
        }
    }

    candidatesDatabase() {
        let result = [];
        if(this.jobCandidates.length == 0){
        throw new Error('Candidate Database is empty!')
        } 
        result.push("Candidates list:");
        this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name)).map(e => result.push(`${e.name}-${e.yearsExpirience}`));
        return result.join("\n");
    }
}

try {
    test1();
} catch (error) {
    console.log('-------------Test1---------');
}
try {
    test2();
} catch (error) {
    console.log('-------------Test2---------');
}
try {
    test3();
} catch (error) {
    console.log('-------------Test3---------');

}
try {
    test4();
} catch (error) {
    console.log('-------------Test4---------');
}

function test1() {
    let Jobs = new JobOffers("Google", "Strategy Analyst");
    console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));

}

function test2() {
    let Jobs = new JobOffers("Google", "Strategy Analyst");
    console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
    console.log(Jobs.jobOffer("John Doe-8"));
    console.log(Jobs.jobOffer("Peter Parker-4"));
    console.log(Jobs.jobOffer("John Jones-8"));
}


function test3() {
    let Jobs = new JobOffers("Google", "Strategy Analyst");
    console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
    console.log(Jobs.jobOffer("John Doe-8"));
    console.log(Jobs.jobOffer("Peter Parker-4"));
    console.log(Jobs.salaryBonus("John Doe"));
    console.log(Jobs.salaryBonus("Peter Parker"));
}

function test4() {
    let Jobs = new JobOffers("Google", "Strategy Analyst");
    console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
    console.log(Jobs.jobOffer("John Doe-8"));
    console.log(Jobs.jobOffer("Peter Parker-4"));
    console.log(Jobs.jobOffer("Jordan Cole-4"));
    console.log(Jobs.salaryBonus("Jordan Cole"));
    console.log(Jobs.salaryBonus("John Doe"));
    console.log(Jobs.candidatesDatabase());
}