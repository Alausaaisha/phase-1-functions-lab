function distanceFromHqInBlocks(PickupAddress){
    const HqAddress = 42;
    let numberOfblocks;

    if (PickupAddress > HqAddress){
        numberOfblocks = PickupAddress - HqAddress
    }
    if (PickupAddress < HqAddress){
        numberOfblocks = HqAddress - PickupAddress
    }
    return (numberOfblocks);
    }

    function distanceFromHqInFeet(PickupAddress){
        const block = 264;
        const HqAddress = 42;
        let distanceInfeet;
        if (PickupAddress > HqAddress){
            distanceInfeet = (PickupAddress - HqAddress) * 264;
        }
        if (PickupAddress < HqAddress){
            distanceInfeet = (HqAddress - PickupAddress) * 264;
        }
        return (distanceInfeet);
    }

function distanceTravelledInFeet(start, destination){
    const block = 264;
    const HqAddress = 42;
    let nOfFeet;
    if (start > HqAddress){
        nOfFeet = (destination - start) * 264;
    }
    if (start < HqAddress){
        nOfFeet = (start - destination) * 264;
    }
    return (nOfFeet);
}

function calculatesFarePrice(start, destination){
    let distanceSomeoneGoes = distanceTravelledInFeet(start, destination)
    if (distanceSomeoneGoes <= 400){
        return 0;
    }else if(distanceSomeoneGoes > 400 && distanceSomeoneGoes <= 2000){
        let notIncluded400 = distanceSomeoneGoes - 400;
        return 0.02 * notIncluded400;
    }else if(distanceSomeoneGoes > 2000 && distanceSomeoneGoes < 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
    
   }