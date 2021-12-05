import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/medievalsharp";

class Races extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <React.Fragment>
                 <nav className="navbar navbar-expand-sm navbar-dark sticky-top" style={{backgroundImage: 'url(assetswood-background.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav list-unstyled">
                            <li className="nav-item active"><a className="nav-link" href="./HomeComponent"><i className="fa fa-home fa-lg" />
                                Home</a>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="./RacesComponent"><i className="fa fa-users fa-lg" />Races</a></li>
                            <li className="nav-item"><a className="nav-link" href="./BuilderComponent"><i className="fa fa-user-plus fa-lg" />Character Builder</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <div style={{ backgroundImage: 'url(assets/parchment2.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className="row row-content">
                        <div className="col-md-8 col-10 mx-auto">
                            <div id="racesCarousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-none d-md-block w-100" src="assets/Races.jpg" style={{ height: '500px', objectFit: 'cover' }} alt="RacesArt" />
                                        <img className="d-md-none d-block w-100" src="assets/Races.jpg" style={{ height: '250px', objectFit: 'cover' }} alt="RacesArt" />
                                        <div className="carousel-caption">
                                            <h3>Discover Races</h3>
                                            <p className="d-none d-sm-block">Let Dungeons and Dragons 101 be your guide to choosing your
                                                first race</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: 'url(assets/wood-background.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className="row row-content">
                            <div className="col align-self-center">
                                <h1 className="text-center">What Race Will You Be?</h1>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid ml-3" id="races">
                        <div className="row">
                            <div className="col mb-4 mt-4">
                                <div className="card" style={{ width: '440px', height: '38rem' }}>
                                    <h5 className="card-header text-center">Dragonborn</h5>
                                    <nav>
                                        <ul className="nav nav-tabs" id="dragonborn-list" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#dragonbornMain" role="tab" aria-controls="dragonbornMain" aria-selected="true">Main</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#dragonbornStuff" role="tab" aria-controls="dragonbornStuff" aria-selected="false">Proud Dragon Kin</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#dragonbornMoreStuff" role="tab" aria-controls="dragonbornMoreStuff" aria-selected="false">Self-Sufficient
                                                    Clans</a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="card-body">
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="dragonbornMain" role="tabpanel">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card-inner">
                                                            <img src="assets/DND-Dragonborn-Race.jpg_large" className="card-img" style={{ width: '380px', height: '30rem' }} alt="Dragonborn Class" />
                                                            <div className="card-img-overlay">
                                                                <p>
                                                                    Born of dragons, as their name proclaims, the dragonborn walk
                                                                    proudly through a world that greets them with fearful
                                                                    incomprehension. Shaped by draconic gods or the dragons themselves,
                                                                    dragonborn originally hatched from dragon eggs as a unique race,
                                                                    combining the best attributes of dragons and humanoids. Some
                                                                    dragonborn are faithful servants to true dragons, others form the
                                                                    ranks of soldiers in great wars, and still others find themselves
                                                                    adrift, with no clear calling in life.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="dragonbornStuff" role="tabpanel" aria-labelledby="dragonbornStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />Dragonborn look very much like dragons standing erect in humanoid form,
                                                    though
                                                    they
                                                    lack wings or a tail.<br />
                                                    <br />The first dragonborn had scales of vibrant hues matching the colors
                                                    of their dragon kin, but generations of interbreeding have created a more
                                                    uniform
                                                    appearance.<br />
                                                    <br />Their small, fine scales are usually brass or bronze in color, sometimes
                                                    ranging
                                                    to
                                                    scarlet, rust, gold, or copper-green.<br />
                                                    <br />They are tall and strongly built, often standing close
                                                    to 6½ feet tall and weighing 300 pounds or more.<br />
                                                    <br />Their hands and feet are strong, talonlike claws with three fingers and a
                                                    thumb
                                                    on each hand.<br />
                                                    <br />The blood of a particular type of dragon runs very strong through some
                                                    dragonborn
                                                    clans.<br />
                                                    <br />These dragonborn often boast scales that more closely match those of their
                                                    dragon
                                                    ancestor—bright red, green, blue, or white, lustrous black, or gleaming metallic
                                                    gold, silver, brass, copper, or bronze.<br />
                                                </p>
                                            </div>
                                            <div className="tab-pane" id="dragonbornMoreStuff" role="tabpanel" aria-labelledby="dragonbornMoreStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />To any dragonborn, the clan is more important than life itself.<br />
                                                    <br />Dragonborn owe their
                                                    devotion and respect to their clan above all else, even the gods.<br />
                                                    <br />Each dragonborn’s
                                                    conduct reflects on the honor of his or her clan, and bringing dishonor to the
                                                    clan
                                                    can
                                                    result in expulsion and exile.<br />
                                                    <br />Each dragonborn knows his or her station and duties within the
                                                    clan, and honor demands maintaining the bounds of that position.<br />
                                                    <br />A continual drive for self-improvement reflects the self-sufficiency of the
                                                    race
                                                    as
                                                    a whole. Dragonborn value skill and excellence in all endeavors.<br />
                                                    <br />They hate to fail, and they
                                                    push themselves to extreme efforts before they give up on something.<br />
                                                    <br />A dragonborn holds
                                                    mastery of a particular skill as a lifetime goal.<br />
                                                    <br />Members of other races who share the same
                                                    commitment find it easy to earn the respect of a dragonborn.<br />
                                                    <br />Though all dragonborn strive to be self-sufficient, they recognize that help
                                                    is
                                                    sometimes needed in difficult situations.<br />
                                                    <br />But the best source for such help is the clan, and
                                                    when a clan needs help, it turns to another dragonborn clan before seeking aid
                                                    from
                                                    other
                                                    races—or even from the gods.<br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4 mt-4">
                                <div className="card" style={{ width: '460px', height: '38rem' }}>
                                    <h5 className="card-header text-center">Dwarf</h5>
                                    <nav>
                                        <ul className="nav nav-tabs" id="dwarf-list" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#dwarfMain" role="tab" aria-controls="dwarfMain" aria-selected="true">Main</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#dwarfStuff" role="tab" aria-controls="dwarfStuff" aria-selected="false">Short &amp; Stout</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#dwarfMoreStuff" role="tab" aria-controls="dwarfMoreStuff" aria-selected="false">Long Memory, Long
                                                    Grudges</a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="card-body">
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="dwarfMain" role="tabpanel">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card-inner">
                                                            <img src="assets/DND-Dwarf-Race.png" className="card-img mx-auto d-block" style={{ width: '380px', height: '30rem' }} alt="Dwarf Class" />
                                                            <div className="card-img-overlay">
                                                                <p>
                                                                    Kingdoms rich in ancient grandeur, halls carved into the roots of
                                                                    mountains,the echoing of picks and hammers in deep mines and blazing forges, a commitment
                                                                    to clan and tradition, and a burning hatred of goblins and orcs—these common
                                                                    threads unite all dwarves.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="dwarfStuff" role="tabpanel" aria-labelledby="dwarfStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />Bold and hardy, dwarves are known as skilled warriors, miners, and workers
                                                    of stone and metal.<br />
                                                    <br />Though they stand well under 5 feet tall, dwarves are so broad and
                                                    compact that they can weigh as much as a human standing nearly two feet
                                                    taller.<br />
                                                    <br />Their courage and endurance are also easily a match for any of the larger
                                                    folk.<br />
                                                    <br />Dwarven skin ranges from deep brown to a paler hue tinged with red, but the
                                                    most common shades are light brown or deep tan, like certain tones of earth.<br />
                                                    <br />Their hair,
                                                    worn long but in simple styles, is usually black, gray, or brown, though paler
                                                    dwarves often have red hair.<br />
                                                    <br />Male dwarves value their beards highly and groom them
                                                    carefully.<br />
                                                </p>
                                            </div>
                                            <div className="tab-pane" id="dwarfMoreStuff" role="tabpanel" aria-labelledby="dwarfMoreStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />Dwarves can live to be more than 400 years old, so the oldest living dwarves
                                                    often
                                                    remember a very different world.<br />
                                                    <br />For example, some of the oldest dwarves living in
                                                    Citadel Felbarr (in the world of the Forgotten Realms) can recall the day, more
                                                    than
                                                    three centuries ago, when orcs conquered the fortress and drove them into an
                                                    exile
                                                    that lasted over 250 years.<br />
                                                    <br />This longevity grants them a perspective on the world
                                                    that shorter-lived races such as humans and halflings lack.<br />
                                                    <br />Dwarves are solid and enduring like the mountains they love, weathering the
                                                    passage
                                                    of centuries with stoic endurance and little change.<br />
                                                    <br />They respect the traditions of
                                                    their clans, tracing their ancestry back to the founding of their most ancient
                                                    strongholds in the youth of the world, and don’t abandon those traditions
                                                    lightly.<br />
                                                    <br />Part of those traditions is devotion to the gods of the dwarves, who uphold
                                                    the
                                                    dwarven ideals of industrious labor, skill in battle, and devotion to the
                                                    forge.<br />
                                                    <br />Individual dwarves are determined and loyal, true to their word and decisive
                                                    in
                                                    action, sometimes to the point of stubbornness.<br />
                                                    <br />Many dwarves have a strong sense of
                                                    justice, and they are slow to forget wrongs they have suffered.<br />
                                                    <br />A wrong done to one
                                                    dwarf is a wrong done to the dwarf’s entire clan, so what begins as one dwarf’s
                                                    hunt
                                                    for vengeance can become a full-blown clan feud.<br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4 mt-4">
                                <div className="card" style={{ width: '460px', height: '38rem' }}>
                                    <h5 className="card-header text-center">Elf</h5>
                                    <nav>
                                        <ul className="nav nav-tabs" id="elf-list" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#elfMain" role="tab" aria-controls="elfMain" aria-selected="true">Main</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#elfStuff" role="tab" aria-controls="elfStuff" aria-selected="false">Slender &amp; Graceful</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#elfMoreStuff" role="tab" aria-controls="elfMoreStuff" aria-selected="false">A Timeless Perspective</a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="card-body">
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="elfMain" role="tabpanel">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card-inner">
                                                            <img src="assets/DND-Elf-Race.png" className="card-img mx-auto d-block" style={{ width: '380px', height: '30rem' }} alt="Elf Class" />
                                                            <div className="card-img-overlay">
                                                                <p>
                                                                    Elves are a magical people of otherworldly grace, living in the world
                                                                    but not entirely part of it. They live in places of ethereal beauty, in the midst of
                                                                    ancient forests or in silvery spires glittering with faerie light, where
                                                                    soft music drifts through the air and gentle fragrances waft on the breeze.
                                                                    Elves love nature and magic, art and artistry, music and poetry, and the good
                                                                    things of the world.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="elfStuff" role="tabpanel" aria-labelledby="elfStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />With their unearthly grace and fine features, elves appear hauntingly
                                                    beautiful
                                                    to
                                                    humans and members of many other races.<br />
                                                    <br />They are slightly shorter than humans on
                                                    average, ranging from well under 5 feet tall to just over 6 feet.<br />
                                                    <br />They are more
                                                    slender than humans, weighing only 100 to 145 pounds.<br />
                                                    <br />Males and females are about
                                                    the same height, and males are only marginally heavier than females.<br />
                                                    <br />Elves’ coloration encompasses the normal human range and also includes skin
                                                    in
                                                    shades of copper, bronze, and almost bluish-white, hair of green or blue, and
                                                    eyes
                                                    like pools of liquid gold or silver.<br />
                                                    <br />Elves have no facial and little body hair.<br />
                                                    <br />They favor elegant clothing in bright colors, and they enjoy simple yet
                                                    lovely
                                                    jewelry.<br />
                                                </p>
                                            </div>
                                            <div className="tab-pane" id="elfMoreStuff" role="tabpanel" aria-labelledby="elfMoreStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />Elves can live well over 700 years, giving them a broad perspective on
                                                    events
                                                    that
                                                    might trouble the shorter-lived races more deeply.<br />
                                                    <br />They are more often amused than
                                                    excited, and more likely to be curious than greedy.<br />
                                                    <br />They tend to remain aloof and
                                                    unfazed by petty happenstance.<br />
                                                    <br />When pursuing a goal, however, whether adventuring on
                                                    a mission or learning a new skill or art, elves can be focused and
                                                    relentless.<br />
                                                    <br />They
                                                    are slow to make friends and enemies, and even slower to forget them.<br />
                                                    <br />They reply to
                                                    petty insults with disdain and to serious insults with vengeance.<br />
                                                    <br />Like the branches of a young tree, elves are flexible in the face of
                                                    danger.<br />
                                                    <br />They
                                                    trust in diplomacy and compromise to resolve differences before they escalate to
                                                    violence.<br />
                                                    <br />They have been known to retreat from intrusions into their woodland homes,
                                                    confident that they can simply wait the invaders out.<br />
                                                    <br />But when the need arises,
                                                    elves reveal a stern martial side, demonstrating skill with sword, bow, and
                                                    strategy.<br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4 mt-4">
                                <div className="card" style={{ width: '450px', height: '38rem' }}>
                                    <h5 className="card-header text-center">Gnome</h5>
                                    <nav>
                                        <ul className="nav nav-tabs" id="gnome-list" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#gnomeMain" role="tab" aria-controls="gnomeMain" aria-selected="true">Main</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#gnomeStuff" role="tab" aria-controls="gnomeStuff" aria-selected="false">Vibrant Expression</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#gnomeMoreStuff" role="tab" aria-controls="gnomeMoreStuff" aria-selected="false">Delighted Dedication</a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="card-body">
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="gnomeMain" role="tabpanel">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card-inner">
                                                            <img src="assets/DND-Gnome-Race.jpg" className="card-img mx-auto d-block" style={{ width: '380px', height: '30rem' }} alt="Gnome Class" />
                                                            <div className="card-img-overlay">
                                                                <p>
                                                                    <br />A constant hum of busy activity pervades the warrens and neighborhoods
                                                                    where
                                                                    gnomes form their close-knit communities.<br />
                                                                    <br />Louder sounds punctuate the hum: a
                                                                    crunch of grinding gears here, a minor explosion there, a yelp of surprise
                                                                    or
                                                                    triumph, and especially bursts of laughter.<br />
                                                                    <br />Gnomes take delight in life,
                                                                    enjoying every moment of invention, exploration, investigation, creation,
                                                                    and
                                                                    play.<br />
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="gnomeStuff" role="tabpanel" aria-labelledby="gnomeStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />A gnome’s energy and enthusiasm for living shines through every inch of his
                                                    or
                                                    her
                                                    tiny body.<br />
                                                    <br />Gnomes average slightly over 3 feet tall and weigh 40 to 45 pounds.<br />
                                                    <br />Their
                                                    tan or brown faces are usually adorned with broad smiles (beneath their
                                                    prodigious
                                                    noses), and their bright eyes shine with excitement.<br />
                                                    <br />Their fair hair has a tendency
                                                    to stick out in every direction, as if expressing the gnome’s insatiable
                                                    interest in
                                                    everything around.<br />
                                                    <br />A gnome’s personality is writ large in his or her appearance.<br />
                                                    <br />A male gnome’s beard,
                                                    in contrast to his wild hair, is kept carefully trimmed but often styled into
                                                    curious forks or neat points.<br />
                                                    <br />A gnome’s clothing, though usually made in modest
                                                    earth tones, is elaborately decorated with embroidery, embossing, or gleaming
                                                    jewels.<br />
                                                </p>
                                            </div>
                                            <div className="tab-pane" id="gnomeMoreStuff" role="tabpanel" aria-labelledby="gnomeMoreStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />As far as gnomes are concerned, being alive is a wonderful thing, and they
                                                    squeeze
                                                    every ounce of enjoyment out of their three to five centuries of life.<br />
                                                    <br />Humans might
                                                    wonder about getting bored over the course of such a long life, and elves take
                                                    plenty of time to savor the beauties of the world in their long years, but
                                                    gnomes
                                                    seem to worry that even with all that time, they can’t get in enough of the
                                                    things
                                                    they want to do and see.<br />
                                                    <br />Gnomes speak as if they can’t get the thoughts out of their heads fast
                                                    enough.<br />
                                                    <br />Even
                                                    as they offer ideas and opinions on a range of subjects, they still manage to
                                                    listen
                                                    carefully to others, adding the appropriate exclamations of surprise and
                                                    appreciation along the way.<br />
                                                    <br />Though gnomes love jokes of all kinds, particularly puns and pranks, they’re
                                                    just as
                                                    dedicated to the more serious tasks they undertake.<br />
                                                    <br />Many gnomes are skilled
                                                    engineers, alchemists, tinkers, and inventors.<br />
                                                    <br />They’re willing to make mistakes and
                                                    laugh at themselves in the process of perfecting what they do, taking bold
                                                    (sometimes foolhardy) risks and dreaming large.<br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4 mt-4">
                                <div className="card" style={{ width: '450px', height: '38rem' }}>
                                    <h5 className="card-header text-center">Half-Elf</h5>
                                    <nav>
                                        <ul className="nav nav-tabs" id="halfelf-list" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#halfelfMain" role="tab" aria-controls="halfelfMain" aria-selected="true">Main</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#halfelfStuff" role="tab" aria-controls="halfelfStuff" aria-selected="false">Of Two Worlds</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#halfelfMoreStuff" role="tab" aria-controls="halfelfMoreStuff" aria-selected="false">Diplomats or
                                                    Wanderers</a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="card-body">
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="halfelfMain" role="tabpanel">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card-inner">
                                                            <img src="assets/DND-Half-Elf-Race.png" className="card-img mx-auto d-block" style={{ width: '380px', height: '30rem' }} alt="Half-Elf Class" />
                                                            <div className="card-img-overlay">
                                                                <p style={{ width: 'fit-content' }}>
                                                                    Walking in two worlds but truly belonging to neither, half-elves combine
                                                                    what some say are the best qualities of their elf and human parents: human
                                                                    curiosity, inventiveness, and ambition tempered by the refined senses, love of nature,
                                                                    and artistic tastes of the elves. Some half-elves live among humans, set apart by
                                                                    their emotional and physical differences, watching friends and loved ones
                                                                    age while time barely touches them. Others live with the elves, growing restless as
                                                                    they reach adulthood in the timeless elven realms, while their peers
                                                                    continue to live as children. Many half-elves, unable to fit into either society, choose
                                                                    lives of solitary wandering or join with other misfits and outcasts in the
                                                                    adventuring life.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="halfelfStuff" role="tabpanel" aria-labelledby="halfelfStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />To humans, half-elves look like elves, and to elves, they look human.<br />
                                                    <br />In height,
                                                    they’re on par with both parents, though they’re neither as slender as elves nor
                                                    as
                                                    broad as humans.<br />
                                                    <br />They range from under 5 feet to about 6 feet tall, and from 100 to
                                                    180 pounds, with men only slightly taller and heavier than women.<br />
                                                    <br />Half-elf men do
                                                    have facial hair, and sometimes grow beards to mask their elven ancestry.<br />
                                                    <br />Half-elven
                                                    coloration and features lie somewhere between their human and elf parents, and
                                                    thus
                                                    show a variety even more pronounced than that found among either race.<br />
                                                    <br />They tend to have the eyes of their elven parents.<br />
                                                </p>
                                            </div>
                                            <div className="tab-pane" id="halfelfMoreStuff" role="tabpanel" aria-labelledby="halfelfMoreStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />Half-elves have no lands of their own, though they are welcome in human
                                                    cities
                                                    and
                                                    somewhat less welcome in elven forests.<br />
                                                    <br />In large cities in regions where elves and
                                                    humans interact often, half-elves are sometimes numerous enough to form small
                                                    communities of their own.<br />
                                                    <br />They enjoy the company of other half-elves, the only
                                                    people who truly understand what it is to live between these two worlds.<br />
                                                    <br />In most parts of the world, though, half-elves are uncommon enough that one
                                                    might
                                                    live for years without meeting another.<br />
                                                    <br />Some half-elves prefer to avoid company
                                                    altogether, wandering the wilds as trappers, foresters, hunters, or adventurers
                                                    and
                                                    visiting civilization only rarely.<br />
                                                    <br />Like elves, they are driven by the wanderlust
                                                    that comes of their longevity.<br />
                                                    <br />Others, in contrast, throw themselves into the thick
                                                    of society, putting their charisma and social skills to great use in diplomatic
                                                    roles or as swindlers.<br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4 mt-4">
                                <div className="card" style={{ width: '450px', height: '38rem' }}>
                                    <h5 className="card-header text-center">Halfling</h5>
                                    <nav>
                                        <ul className="nav nav-tabs" id="halfling-list" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#halflingMain" role="tab" aria-controls="halflingMain" aria-selected="true">Main</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#halflingStuff" role="tab" aria-controls="halflingStuff" aria-selected="false">Small &amp; Practical</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#halflingMoreStuff" role="tab" aria-controls="halflingMoreStuff" aria-selected="false">Kind &amp; Curious</a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="card-body">
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="haflingMain" role="tabpanel">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card-inner">
                                                            <img src="assets/DND-Halfling-Race.jpg" className="card-img mx-auto d-block" style={{ width: '380px', height: '30rem' }} alt="Halfling Class" />
                                                            <div className="card-img-overlay">
                                                                <p>
                                                                    The comforts of home are the goals of most halflings’ lives: a place to
                                                                    settle in peace and quiet, far from marauding monsters and clashing armies; a
                                                                    blazing fire and a generous meal; fine drink and fine conversation.
                                                                    Though some halflings live out their days in remote agricultural communities, others
                                                                    form nomadic bands that travel constantly, lured by the open road and the wide
                                                                    horizon to discover the wonders of new lands and peoples.
                                                                    But even these wanderers love peace, food, hearth, and home, though home might be a wagon
                                                                    jostling along a dirt road or a raft floating downriver.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="halflingStuff" role="tabpanel" aria-labelledby="halflingStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />The diminutive halflings survive in a world full of larger creatures by
                                                    avoiding
                                                    notice or, barring that, avoiding offense.<br />
                                                    <br />Standing about 3 feet tall, they appear
                                                    relatively harmless and so have managed to survive for centuries in the shadow
                                                    of
                                                    empires and on the edges of wars and political strife.<br />
                                                    <br />They are inclined to be
                                                    stout, weighing between 40 and 45 pounds.<br />
                                                    <br />Halflings’ skin ranges from tan to pale with a ruddy cast, and their hair is
                                                    usually
                                                    brown or sandy brown and wavy.<br />
                                                    <br />They have brown or hazel eyes.<br />
                                                    <br />Halfling men often
                                                    sport long sideburns, but beards are rare among them and mustaches even more
                                                    so.<br />
                                                    <br />They like to wear simple, comfortable, and practical clothes, favoring
                                                    bright
                                                    colors.<br />
                                                    <br />Halfling practicality extends beyond their clothing.<br />
                                                    <br />They’re concerned with basic
                                                    needs and simple pleasures and have little use for ostentation.<br />
                                                    <br />Even the wealthiest
                                                    of halflings keep their treasures locked in a cellar rather than on display for
                                                    all
                                                    to see.<br />
                                                    <br />They have a knack for finding the most straightforward solution to a
                                                    problem, and have little patience for dithering.<br />
                                                </p>
                                            </div>
                                            <div className="tab-pane" id="halflingMoreStuff" role="tabpanel" aria-labelledby="halflingMoreStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />Halflings are an affable and cheerful people.<br />
                                                    <br />They cherish the bonds of family and
                                                    friendship as well as the comforts of hearth and home, harboring few dreams of
                                                    gold
                                                    or glory.<br />
                                                    <br />Even adventurers among them usually venture into the world for reasons of
                                                    community, friendship, wanderlust, or curiosity.<br />
                                                    <br />They love discovering new things,
                                                    even simple things, such as an exotic food or an unfamiliar style of
                                                    clothing.<br />
                                                    <br />Halflings are easily moved to pity and hate to see any living thing
                                                    suffer.<br />
                                                    <br />They are generous, happily sharing what they have even in lean times.<br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4 mt-4">
                                <div className="card" style={{ width: '450px', height: '38rem' }}>
                                    <h5 className="card-header text-center">Half-Orc</h5>
                                    <nav>
                                        <ul className="nav nav-tabs" id="halforc-list" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#halforcMain" role="tab" aria-controls="halforcMain" aria-selected="true">Main</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#halforcStuff" role="tab" aria-controls="halforcStuff" aria-selected="false">Scarred &amp; Strong</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#halforcMoreStuff" role="tab" aria-controls="halforcMoreStuff" aria-selected="false">The Mark of Gruumsh</a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="card-body">
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="halforcMain" role="tabpanel">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card-inner">
                                                            <img src="assets/DND-Half-Orc-Race.jpg" className="card-img mx-auto d-block" style={{ width: '380px', height: '30rem' }} alt="Half-Orc Class" />
                                                            <div className="card-img-overlay">
                                                                <p>
                                                                    Whether united under the leadership of a mighty warlock or having fought
                                                                    to a standstill after years of conflict, orc and human tribes sometimes form
                                                                    alliances, joining forces into a larger horde to the terror of civilized
                                                                    lands nearby. When these alliances are sealed by marriages, half-orcs are born.
                                                                    Some half-orcs rise to become proud chiefs of orc tribes, their human blood
                                                                    giving them an edge over their full-blooded orc rivals.
                                                                    Some venture into the world to prove their worth among humans and other more civilized races.
                                                                    &gt;Many of these become adventurers, achieving greatness for their mighty deeds and notoriety
                                                                    for their barbaric customs and savage fury.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="halforcStuff" role="tabpanel" aria-labelledby="halforcStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent
                                                    teeth,
                                                    and towering builds make their orcish heritage plain for all to see.<br />
                                                    <br />Half-orcs stand
                                                    between 5 and 7 feet tall and usually weigh between 180 and 250 pounds.<br />
                                                    <br />Orcs regard battle scars as tokens of pride and ornamental scars as things
                                                    of
                                                    beauty.<br />
                                                    <br />Other scars, though, mark an orc or half-orc as a former slave or a
                                                    disgraced exile.<br />
                                                    <br />Any half-orc who has lived among or near orcs has scars, whether
                                                    they are marks of humiliation or of pride, recounting their past exploits and
                                                    injuries.<br />
                                                    <br />Such a half-orc living among humans might display these scars proudly or
                                                    hide them in shame.<br />
                                                </p>
                                            </div>
                                            <div className="tab-pane" id="halforcMoreStuff" role="tabpanel" aria-labelledby="halforcMoreStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />The one-eyed god Gruumsh created the orcs, and even those orcs who turn away
                                                    from
                                                    his worship can’t fully escape his influence.<br />
                                                    <br />The same is true of half-orcs, though
                                                    their human blood moderates the impact of their orcish heritage.<br />
                                                    <br />Some half-orcs hear
                                                    the whispers of Gruumsh in their dreams, calling them to unleash the rage that
                                                    simmers within them.<br />
                                                    <br />Others feel Gruumsh’s exultation when they join in melee
                                                    combat—and either exult along with him or shiver with fear and loathing.<br />
                                                    <br />Half-orcs
                                                    are not evil by nature, but evil does lurk within them, whether they embrace it
                                                    or
                                                    rebel against it.<br />
                                                    <br />Beyond the rage of Gruumsh, half-orcs feel emotion powerfully.<br />
                                                    <br />Rage doesn’t just
                                                    quicken their pulse, it makes their bodies burn.<br />
                                                    <br />An insult stings like acid, and
                                                    sadness saps their strength.<br />
                                                    <br />But they laugh loudly and heartily, and simple bodily
                                                    pleasures—feasting, drinking, wrestling, drumming, and wild dancing—fill their
                                                    hearts with joy.<br />
                                                    <br />They tend to be short-tempered and sometimes sullen, more inclined
                                                    to action than contemplation and to fighting than arguing.<br />
                                                    <br />The most accomplished
                                                    half-orcs are those with enough self-control to get by in a civilized land.<br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4 mt-4">
                                <div className="card" style={{ width: '450px', height: '38rem' }}>
                                    <h5 className="card-header text-center">Human</h5>
                                    <nav>
                                        <ul className="nav nav-tabs" id="human-list" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#humanMain" role="tab" aria-controls="humanMain" aria-selected="true">Main</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#humanStuff" role="tab" aria-controls="humanStuff" aria-selected="false">A Broad Spectrum</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#humanMoreStuff" role="tab" aria-controls="humanMoreStuff" aria-selected="false">Variety in All Things</a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="card-body">
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="humanMain" role="tabpanel">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card-inner">
                                                            <img src="assets/DND-Human-Race.jpg" className="card-img mx-auto d-block" style={{ width: '380px', height: '30rem' }} alt="Human Class" />
                                                            <div className="card-img-overlay">
                                                                <p>
                                                                    In the reckonings of most worlds, humans are the youngest of the common
                                                                    races, late to arrive on the world scene and short-lived in comparison to dwarves,
                                                                    elves, and dragons. Perhaps it is because of their shorter lives that they
                                                                    strive to achieve as much as they can in the years they are given.
                                                                    Or maybe they feel they have something to prove to the elder races, and that’s why they
                                                                    build their mighty empires on the foundation of conquest and trade.
                                                                    Whatever drives them, humans are the innovators, the achievers, and the pioneers of the
                                                                    worlds.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="humanStuff" role="tabpanel" aria-labelledby="humanStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />With their penchant for migration and conquest, humans are more physically
                                                    diverse
                                                    than other common races.<br />
                                                    <br />There is no typical human.<br />
                                                    <br />An individual can stand from 5
                                                    feet to a little over 6 feet tall and weigh from 125 to 250 pounds.<br />
                                                    <br />Human skin
                                                    shades range from nearly black to very pale, and hair colors from black to blond
                                                    (curly, kinky, or straight); males might sport facial hair that is sparse or
                                                    thick.<br />
                                                    <br />A lot of humans have a dash of nonhuman blood, revealing hints of elf, orc,
                                                    or
                                                    other
                                                    lineages.<br />
                                                    <br />Humans reach adulthood in their late teens and rarely live even a single
                                                    century.<br />
                                                </p>
                                            </div>
                                            <div className="tab-pane" id="humanMoreStuff" role="tabpanel" aria-labelledby="humanMoreStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />Humans are the most adaptable and ambitious people among the common
                                                    races.<br />
                                                    <br />They have
                                                    widely varying tastes, morals, and customs in the many different lands where
                                                    they
                                                    have settled.<br />
                                                    <br />When they settle, though, they stay: they build cities to last for the
                                                    ages, and great kingdoms that can persist for long centuries.<br />
                                                    <br />An individual human
                                                    might have a relatively short life span, but a human nation or culture preserves
                                                    traditions with origins far beyond the reach of any single human’s memory.<br />
                                                    <br />They live
                                                    fully in the present—making them well suited to the adventuring life—but also
                                                    plan
                                                    for the future, striving to leave a lasting legacy.<br />
                                                    <br />Individually and as a group,
                                                    humans are adaptable opportunists, and they stay alert to changing political and
                                                    social dynamics.<br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4 mt-4">
                                <div className="card" style={{ width: '460px', height: '38rem' }}>
                                    <h5 className="card-header text-center">Tiefling</h5>
                                    <nav>
                                        <ul className="nav nav-tabs" id="tiefling-list" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#tieflingMain" role="tab" aria-controls="tieflingMain" aria-selected="true">Main</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#tieflingStuff" role="tab" aria-controls="tieflingStuff" aria-selected="false">Infernal Bloodline</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#tieflingMoreStuff" role="tab" aria-controls="tieflingMoreStuff" aria-selected="false">Self-Reliant &amp;
                                                    Suspicious</a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="card-body">
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="tieflingMain" role="tabpanel">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card-inner">
                                                            <img src="assets/Mollymauk_Official_byArianaOrner.png" className="card-img mx-auto d-block" style={{ width: '380px', height: '30rem' }} alt="Tiefling Class" />
                                                            <div className="card-img-overlay">
                                                                <p>
                                                                    To be greeted with stares and whispers, to suffer violence and insult on
                                                                    the street, to see mistrust and fear in every eye: this is the lot of the
                                                                    tiefling. And to twist the knife, tieflings know that this is because a pact
                                                                    struck generations ago infused the essence of Asmodeus—overlord of the Nine
                                                                    Hells—intotheir bloodline. Their appearance and their nature are not their fault but the
                                                                    result of an ancient sin, for which they and their children and their
                                                                    children’s children will always be held accountable.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="tieflingStuff" role="tabpanel" aria-labelledby="tieflingStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />Tieflings are derived from human bloodlines, and in the broadest possible
                                                    sense,
                                                    they still look human. However, their infernal heritage has left a clear imprint
                                                    on
                                                    their appearance.<br />
                                                    <br />Tieflings have large horns that take any of a variety of shapes:
                                                    some have curling horns like a ram, others have straight and tall horns like a
                                                    gazelle’s, and some spiral upward like an antelopes’ horns.<br />
                                                    <br />They have thick tails,
                                                    four to five feet long, which lash or coil around their legs when they get upset
                                                    or
                                                    nervous.<br />
                                                    <br />Their canine teeth are sharply pointed, and their eyes are solid
                                                    colors—black, red, white, silver, or gold—with no visible sclera or pupil.<br />
                                                    <br />Their
                                                    skin tones cover the full range of human coloration, but also include various
                                                    shades
                                                    of red.<br />
                                                    <br />Their hair, cascading down from behind their horns, is usually dark, from
                                                    black or brown to dark red, blue, or purple.<br />
                                                </p>
                                            </div>
                                            <div className="tab-pane" id="tieflingMoreStuff" role="tabpanel" aria-labelledby="tieflingMoreStuff-tab">
                                                <p className="card-text scroll p-2" style={{ maxHeight: '30rem' }}>
                                                    <br />Tieflings subsist in small minorities found mostly in human cities or towns,
                                                    often
                                                    in the roughest quarters of those places, where they grow up to be swindlers,
                                                    thieves, or crime lords.<br />
                                                    <br />Sometimes they live among other minority populations in
                                                    enclaves where they are treated with more respect.<br />
                                                    <br />Lacking a homeland, tieflings know that they have to make their own way in
                                                    the
                                                    world
                                                    and that they have to be strong to survive.<br />
                                                    <br />They are not quick to trust anyone who
                                                    claims to be a friend, but when a tiefling’s companions demonstrate that they
                                                    trust
                                                    him or her, the tiefling learns to extend the same trust to them.<br />
                                                    <br />And once a tiefling gives someone loyalty, the tiefling is a firm friend or
                                                    ally
                                                    for life.<br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-sm-2 offset-1">
                                <div>
                                    <h5>Links</h5>
                                    <ul className="list-unstyled">
                                        <li><a href="./HomeComponent">Home</a></li>
                                        <li><a href="./RacesComponent">Races</a></li>
                                        <li><a href="./Builder">Character Builder</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-sm-5 text-center">
                                <div>
                                    <h5>Social</h5>
                                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>
                                    <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook" /></a>
                                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>
                                    <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                                </div>
                            </div>
                            <div className="col-sm-4 text-center">
                                <div>
                                    <a className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" />
                                        1-206-555-1234<br /></a>
                                    <a className="btn btn-link" href="mailto:dungeonsanddragons101@gmail.com"><i className="fa fa-envelope-o" />
                                        dungeonsanddragons101@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
 
        );
    }
};

export default Races;