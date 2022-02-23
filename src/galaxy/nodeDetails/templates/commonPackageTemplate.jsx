import React from 'react';
export default commonPackageTemplate;

function commonPackageTemplate(model, link, linkText) {
  return (
    
    <div className='container-fluid row'>
      <div className='hidden-xs'>
        <div className='col-xs-6'>
          <a href={getLink(model.name)} target='_blank'>
            <h4 title={linkText}>{linkText}</h4>
          </a>
        </div>
        <div className="col-xs-3">
          <div className="row">
            <h2 id={model.id} className='in-degree'>{model.inDegree}</h2>
          </div>
          <div className="row small">{model.inDegreeLabel}</div>
        </div>
        <div className="col-xs-3">
          <div className="row">
            <h2 id={model.id} className='out-degree'>{model.outDegree}</h2>
          </div>
          <div className="row small">{model.outDegreeLabel}</div>
        </div>
        <div className="col-xs-12">
          <div className="row">{getDescription(model.name)}</div>
        </div>
      </div>
      <div className='visible-xs-block'>
        <div className='row info-block'>
          <div className='col-xs-6 no-overflow'><a href={link} target="_blank">{linkText}</a></div>
          <div id={model.id} className='in-degree col-xs-3'>{model.inDegree}</div>
          <div id={model.id} className='out-degree col-xs-3'>{model.outDegree}</div>
          <div id={model.id} className='no-overflow col-xs-12'>{getDescription(model.name)}</div>
        </div>
      </div>
    </div>
    
  );
}
let map = new Map();

// threat groups links an descriptions
map.set('Threat Group: ALUMINUM SARATOGA', {
  link: 'http://www.secureworks.com/research/threat-profiles/aluminum-saratoga',
  name: "ALUMINUM SARATOGA",
  country: "PALESTINE",
  objectives: ['Espionage', 'Hacktivism'],
  aliases: ['Extreme Jackal(CrowdStrike)', 'Gaza CyberGang', 'Molerats(FireEye)', 'Operation DustySky(ClearSky)'],
  tools: ['BlackShades', 'DarkComet', 'PoisonIvy', 'QuasarRAT', 'XtremeRat'],
  description: 'ALUMINUM SARATOGA, self-styled as the Gaza Hackers Team, is a threat group that CTU researchers assess with low confidence to be of Palestinian origin. The group operates against Israeli and Palestinian targets and is known as Dusty Sky and Molerats in public reporting. Technical evidence indicates that it has been active since at least 2011. The group’s activities include targeted spearphishing, distributed denial of service attacks and website defacements. ALUMINUM SARATOGA uses many openly available tools for its operations, including XtremeRAT, QuasarRat, DarkComet, Blackshades and PoisonIvy.'
});

map.set('Threat Group: BRONZE ATLAS', {
  link: 'http://www.secureworks.com/research/threat-profiles/bronze-atlas',
  name: "BRONZE ATLAS",
  country: "CHINA",
  objectives: ['Espionage'],
  aliases: ['APT41(FireEye)', 'Axiom', 'BARIUM(Microsoft)', 'Blackfly(Symantec)', 'GREF',
    'Group 72(Talos)', 'Red Kelpie(PWC)', 'TG - 2633(SCWX CTU)', 'Wicked Panda(CrowdStrike)', 'Winnti'],
  tools: ['Acehash', 'CCleaner v5.33 backdoor', 'China Chopper', 'Dicey MSDN', 'HUC Proxy Malware (Htran)',
    'Mimikatz', 'PlugX', 'PowerShell Empire', 'RbDoor', 'Speculoos, Winnti'],
  description: 'BRONZE ATLAS has been operating since at least 2007. CTU researchers assess with high confidence that the group’s intent is towards theft of intellectual property from organizations in developed economies, and with moderate confidence that this is on behalf of China to support decision making in a range of Chinese economic sectors. The group primarily use scan-and-exploit and phishing for initial access and enable their intrusions through theft of code signing certificates from technology and gaming organizations. CTU researchers have linked BRONZE ATLAS to targeted attacks on organizations in the pharmaceuticals, media, human rights, fossil fuels and agriculture sectors. The group has also been publicly linked to the high collateral supply chain compromises leveraging software updates for Ccleaner and Netsarang to compromise users in 2017. BRONZE ATLAS is also known as APT41, Axiom or Winnti in public reporting.'
});

map.set('Threat Group: BRONZE BUTLER', {
  link: 'http://www.secureworks.com/research/threat-profiles/bronze-butler',
  name: "BRONZE BUTLER",
  country: "CHINA",
  objectives: ['Espionage'],
  aliases: ['CTG - 2006(SCWX CTU)', 'Tick(Palo Alto)'],
  tools: ['ABK', 'Daserf', 'xxmm'],
  description: 'BRONZE BUTLER (also known as Tick) is a threat group that CTU researchers assess with moderate confidence operates on behalf of China. The group has been observed by CTU researchers targeting networks in East Asia, primarily Japan, using the Daserf remote access trojan. BRONZE BUTLER has targeted organizations in manufacturing, engineering and media industries, leveraging strategic web compromises and spearphishing to compromise their victims.'
});

map.set('Threat Group: BRONZE EDISON', {
  link: 'http://www.secureworks.com/research/threat-profiles/bronze-edison',
  name: "BRONZE EDISON",
  country: "CHINA",
  objectives: ['Espionage'],
  aliases: ['APT4(FireEye)', 'Samurai Panda(CrowdStrike)', 'Sykipot(Symantec)', 'TG - 0623(SCWX CTU)'],
  tools: ['Gh0st RAT', 'Wkysol', 'ZXPortMap'],
  description: 'BRONZE EDISON has been active since at least 2007 and has historically used the Wkysol (aka Sykipot) backdoor and installer, delivered via spearphishing emails containing an attachment or download link. CTU researchers assess with moderate confidence that BRONZE EDISON operates on behalf of China. It has targeted individuals in senior positions within organizations and has been linked to intrusions in the fossil fuels, defense and telecoms sectors, with a historic focus on Russia and South Korea. It is unclear whether the group is still active at present.'
});

map.set('Threat Group: BRONZE ELGIN', {
  link: 'http://www.secureworks.com/research/threat-profiles/bronze-elgin',
  country: "CHINA",
  name: "BRONZE ELGIN",
  objectives: ['Espionage'],
  aliases: ["CTG-8171 (SCWX CTU)", "Lotus Blossom (Palo Alto)", "Lstudio", "Spring Dragon (Kaspersky)"],
  tools: "Elise",
  description: "The BRONZE ELGIN (also known as Lotus Blossom) threat group has been observed targeting government and military organizations in South East Asia since 2015. CTU researchers assess with moderate confidence that the group operates on behalf of China. BRONZE ELGIN leverages the Elise backdoor as part of its operations."
});

map.set('Threat Group: BRONZE EXPORT', {
  link: 'http://www.secureworks.com/research/threat-profiles/bronze-export',
  country: "CHINA",
  name: "BRONZE ELGIN",
  objectives: ['Espionage', 'Financial Gain'],
  aliases: ['TG - 3279(SCWX CTU)', 'Wicked Spider(CrowdStrike)'],
  tools: ['Conpee', 'PwDump'],
  description: "BRONZE EXPORT has targeted the entertainment and video game industries since at least 2009. CTU researchers assess with moderate confidence that the group is based in the People's Republic of China and is focused on the collection of video game source code either to “crack” the games for free use, develop tools to cheat at them, or use the source code for competing products. BRONZE EXPORT has previously been observed using tools such as pwdump6 and Conpee, a modular plugin based RAT."
});

// Bronze Express
map.set('Threat Group: BRONZE EXPRESS', {
  link: 'http://www.secureworks.com/research/threat-profiles/bronze-express',
  country: "CHINA",
  name: "BRONZE EXPRESS",
  objectives: ['Espionage'],
  aliases: ['APT26(FireEye)', 'TG - 0055(SCWX CTU)'],
  tools: ['9002', 'China Chopper', 'HKDoor', 'NewCT', 'NFLog', 'PlugX', 'Smac'],
  description: "BRONZE EXPRESS has targeted organizations involved in defense research and manufacturing. CTU researchers assess with moderate confidence that the group operates on behalf of China. It has used tools such as PlugX, China Chopper and HKDoor as part of its intrusions."
});

// Bronze Firestone
map.set('Threat Group: BRONZE FIRESTONE', {
  link: 'http://www.secureworks.com/research/threat-profiles/bronze-firestone',
  country: "CHINA",
  name: "BRONZE FIRESTONE",
  objectives: ['Espionage'],
  aliases: ['APT19(FireEye)', 'C0d0s0', 'Deep Panda(CrowdStrike)', 'Pupa(Symantec)', 'TG - 3551(SCWX CTU)'],
  tools: ['9002', 'Alice\'s Rabbit Hole', 'Briba', 'Derusbi', 'PlugX', 'PoisonIvy', 'PowerShell Empire', 'Zuguo'],
  description: "BRONZE FIRESTONE is a threat group that CTU researchers assess with moderate confidence operates on behalf of China. It has targeted data from organizations within the technology, financial services, manufacturing, defense and government verticals. Also known as APT19, BRONZE FIRESTONE likely comprises a portion of the Deep Panda superset. The group has been active since at least 2010, when their tools were delivered through a strategic web compromise of the Nobel Peace Prize website that leveraged a 0-day in the Firefox browser."
});

// Bronze Littlewood
map.set('Threat Group: BRONZE FLEETWOOD', {
  link: 'http://www.secureworks.com/research/threat-profiles/bronze-fleetwood',
  country: "CHINA",
  name: "BRONZE FIRESTONE",
  objectives: ['Espionage'],
  aliases: ['APT5 (FireEye)', 'DPD (Palo Alto)', 'Keyhole Panda (CrowdStrike)', 'Poisoned Flight (Kaspersky)', 'TG-2754 (SCWX CTU)'],
  tools: ['Binanen', 'Comfoo', 'Gh0st RAT', 'Isastart', 'Leouncia', 'OrcaRAT', 'PCShare', 'Skeleton Key', 'SlyPidgin', 'VinSelf'],
  description: "BRONZE FLEETWOOD is a threat group that CTU researchers assess with moderate confidence operates on behalf of China.The group has previously been observed using both the Leouncia and VinSelf tool kits to target organizations in the aerospace and communications sectors.The intent of the group is likely theft of information from targeted networks.There is strong overlap between the tools and infrastructure used by BRONZE FLEETWOOD and a threat group publicly reported by Secureworks dubbed Comfoo."
});

// BRONZE GENEVA
map.set('Threat Group: BRONZE GENEVA', {
  link: 'http://www.secureworks.com/research/threat-profiles/bronze-geneva',
  country: "CHINA",
  name: "BRONZE GENEVA",
  objectives: ['Espionage'],
  aliases: ['APT30(FireEye)', 'BRONZE STERLING(SCWX CTU)', 'CTG - 5326(SCWX CTU)', 'Naikon(Kaspersky)'],
  tools: ['Lecna'],
  description: "BRONZE GENEVA is a threat group that CTU researchers assess with moderate confidence operates on behalf of China and has been active since at least 2005. The group's intent appears to be theft of political, economic and military information from commercial and government networks globally. BRONZE GENEVA, also known in public reporting as APT30, has been observed targeting information held by Asian organizations (specifically in the South China Sea region), which is likely consistent with the intelligence gathering requirements of the Chinese state."
});

// COBALT DICKENS
map.set('Threat Group: COBALT DICKENS', {
  link: 'http://www.secureworks.com/research/threat-profiles/cobalt-dickens',
  country: "IRAN",
  name: "COBALT DICKENS",
  objectives: ['Espionage'],
  aliases: ['SilentLibrarian(PhishLabs)'],
  tools: [],
  description: "Since at least 2013, COBALT DICKENS has targeted universities, academia, and government organizations. The threat actors create lookalike domains to conduct phishing campaigns and use stolen credentials to steal intellectual property. In March 2018, the U.S. Department of Justice indicted the Mabna Institute and nine Iranian nationals in connection with activity through 2017. In August 2018, CTU researchers discovered infrastructure spoofing university resources that targeted over 150 institutions globally. As of this publication, the threat actors continue their operations. CTU researchers have identified over 250 sub-domains associated with COBALT DICKENS phishing campaigns."
});

//COBALT EDGEWATER
map.set('Threat Group: COBALT EDGEWATER', {
  link: 'http://www.secureworks.com/research/threat-profiles/cobalt-edgewater',
  country: "IRAN",
  name: "COBALT EDGEWATER",
  objectives: ['Espionage'],
  aliases: ['APT34 (FireEye)', 'Cold River (Lastline)', 'DNSpionage (Talos)'],
  tools: ['AgentDrable', 'DNSpionage', 'Karkoff', 'TWOTONE'],
  description: "Since 2018, COBALT EDGEWATER has targeted organizations across the Middle East, focusing on Lebanon and the UAE. CTU analysis suggests the group may have also targeted organizations in Albania and Kuwait. The group operate their own malware platforms: AgentDrable and Karkoff. Karkoff implants are controlled via a command and control (C2) panel named Scarecrow, details of which were publicly leaked in April 2019. COBALT EDGEWATER uses DNS hijacking for credential capture and social media-based interactions for malware delivery to gain initial access to targets. Multiple COBALT EDGEWATER phishing emails purported to originate from academic institutes or included fraudulent job postings for energy and technology companies. CTU researchers have observed COBALT GYPSY displaying a similar preference for academia and job-themed lures. Infrastructure overlaps and tradecraft similarities suggest a connection between COBALT GYPSY, COBALT EDGEWATER and COBALT KATANA operations. CTU researchers assess with moderate confidence that COBALT EDGEWATER operates on behalf of Iran."
});

//COBALT GYPSY
map.set('Threat Group: COBALT GYPSY', {
  link: 'http://www.secureworks.com/research/threat-profiles/cobalt-gypsy',
  country: "IRAN",
  name: "COBALT GYPSY",
  objectives: ['Espionage'],
  aliases: ['APT34(FireEye)', 'CHRYSENE(Dragos)', 'Crambus(Symantec)', 'Helix Kitten(CrowdStrike)', 'ITG13(IBM)', 'OilRig(ClearSky)'],
  tools: ['Glimpse', 'Helminth', 'Jason', 'MacDownloader', 'PoisonFrog', 'PupyRAT', 'RGDoor', 'ThreeDollars', 'TinyZbot', 'Toxocara', 'Trichuris', 'TwoFace'],
  description: "COBALT GYPSY has been active since at least 2015, targeting MENA-based or affiliated organizations in the telecommunications, government, defense, oil and financial services verticals. CTU researchers assess with moderate confidence that COBALT GYPSY operates on behalf of Iran. The group often uses spearphishing, with academic or employment related themes, to infect targets, many of whom are identified and approached via social media sites. COBALT GYPSY also performs broad phishing operations against global government, energy, oil/gas, aviation, and nuclear organizations, as well as against defense contractors."
});

// COBALT  HICKMAN
map.set('Threat Group: COBALT HICKMAN', {
  link: 'http://www.secureworks.com/research/threat-profiles/cobalt-hickman',
  country: "IRAN",
  name: "COBALT HICKMAN",
  objectives: ['Espionage'],
  aliases: ['APT39(FireEye)', 'Chafer(Symantec)', 'ITG07(IBM)'],
  tools: ['MechaFlounder', 'Mimikatz', 'Remexi', 'TREKX'],
  description: "COBALT HICKMAN has been active since at least 2014 and possibly as early as 2011. In the past, the group primarily targeted Iranian domestic citizens, the wider Iranian diaspora, telecommunications and travel verticals. In 2018, CTU researchers observed COBALT HICKMAN creating spoofed airline, telecommunication, and travel system provider domains to lure targets. The threat actors use phishing techniques to compromise credentials or to install the modular Remexi malware. CTU researchers discovered new infrastructure in early 2019, suggesting that COBALT HICKMAN remains active. The threat group continues its focus on the telecommunications and travel verticals, which CTU researchers assess with moderate confidence is for the purposes of surveillance operations on individuals and organizations of interest to the Iranian government."
});

// COBALT JUNO
map.set('Threat Group: COBALT JUNO', {
  link: 'http://www.secureworks.com/research/threat-profiles/cobalt-juno',
  country: "IRAN",
  name: "COBALT JUNO",
  objectives: ['Espionage'],
  aliases: ['APT-C-38 (QiAnXin)', 'SABER LION', 'TG-2884 (SCWX CTU)'],
  tools: ['HARDCANDY', 'SABER1', 'SABER2', 'ZooPark'],
  description: "COBALT JUNO has operated since at least 2013 and focused on targets located in the Middle East including Iran, Jordan, Egypt & Lebanon. COBALT JUNO custom spyware families SABER1 and SABER2, include surveillance functionality and masquerade as legitimate software utilities such as Adobe Updater, StickyNote and ASKDownloader. CTU researchers assess with moderate confidence that COBALT JUNO operated the ZooPark Android spyware since at least mid-2015. ZooPark was publicly exposed in 2018 in both vendor reporting and a high profile leak of C2 server data. COBALT JUNO is linked to a private security company in Iran and outsources aspects of tool development work to commercial software developers. CTU researchers have observed the group using strategic web compromises to deliver malware. CTU researchers’ discovery of new C2 domains in 2019 suggest the group is still actively performing operations."
});

// COBALT KATANA
map.set('Threat Group: COBALT KATANA', {
  link: 'http://www.secureworks.com/research/threat-profiles/cobalt-katana',
  country: "IRAN",
  name: "COBALT KATANA",
  objectives: ['Espionage'],
  aliases: ['Hive0081 (IBM)', 'SectorD01 (NHSC)', 'xHunt campaign (Palo Alto)'],
  tools: ['CASHY200', 'Diezen', 'Eye', 'Gon', 'Hisoka', 'Hisoka Netero', 'HyphenShell', 'Killua', 'Sakabota Framework'],
  description: "COBALT KATANA has been active since at least March 2018, and it focuses many of its operations on organizations based in or associated with Kuwait. The group has targeted government, logistics, and shipping organizations. The threat actors gain initial access to targets using DNS hijacking, strategic web compromise with SMB forced authentication, and password brute force attacks."
});

// COBALT LYCEUM
map.set('Threat Group: COBALT LYCEUM', {
  link: 'http://www.secureworks.com/research/threat-profiles/cobalt-lyceum',
  country: "IRAN",
  name: "COBALT LYCEUM",
  objectives: ['Espionage'],
  aliases: ['HEXANE(Dragos)'],
  tools: ['DanBot', 'RGDoor'],
  description: "CTU researchers discovered the COBALT LYCEUM threat group in mid-2019 and determined that it has been active since at least 2018. The group is assessed with moderate confidence to operate on behalf of Iran, with a relatively small scope of operations in comparison to other Iranian groups. Known targets include critical infrastructure organizations, such as telecommunications and oil and gas companies."
});


// COBALT TRINITY
map.set('Threat Group: COBALT TRINITY', {
  link: 'http://www.secureworks.com/research/threat-profiles/cobalt-trinity',
  country: "IRAN",
  name: "COBALT TRINITY",
  objectives: ['Espionage'],
  aliases: ['APT33(FireEye)', 'Elfin(Symantec)', 'HOLMIUM(Microsoft)', 'MAGNALIUM(Dragos)', 'Refined Kitten(CrowdStrike)', 'TA451(Proofpoint)'],
  tools: ['AutoCore', 'Cadlotcorg', 'Dello RAT', 'Imminent Monitor', 'KDALogger', 'Koadic', 'NanoCore', 'NetWire', 'PoshC2', 'POWERTON', 'Poylog', 'PupyRAT', 'Schoolbag'],
  description: "COBALT TRINITY has been active since at least 2015 and CTU researchers assess with moderate confidence that the group operates on behalf of Iran. Known targets include U.S., UK, and Middle Eastern organizations in the government, defense, aerospace, legal, oil and gas, and energy verticals. However, broad campaigns have also been conducted that cut across multiple verticals."
});


// COBALT ULSTER
map.set('Threat Group: COBALT ULSTER', {
  link: 'http://www.secureworks.com/research/threat-profiles/cobalt-ulster',
  country: "IRAN",
  name: "COBALT ULSTER",
  objectives: ['Espionage'],
  aliases: ['MuddyWater (Palo Alto)', 'Seedworm (Symantec)', 'Static Kitten (CrowdStrike)', 'TEMP.Zagros (FireEye)'],
  tools: ['FORELORD', 'Koadic', 'LaZagne', 'Metasploit', 'PowerStats'],
  description: "Since at least 2017, COBALT ULSTER has targeted various government, telecommunications, oil and gas, and education organizations in the Middle East, Central Asia, and North America. CTU researchers assess with moderate confidence that the COBALT ULSTER operates on behalf of Iran. The group uses macro-laden phishing documents, publicly available tools such as Metasploit and LaZagne and custom tools including PowerStats and Forelord. The threat actors inject false flags into code associated with their operations, likely to confuse security researchers who analyze artifacts related to COBALT ULSTER intrusions."
});

// COPPER FIELDSTONE
map.set('Threat Group: COPPER FIELDSTONE', {
  link: 'http://www.secureworks.com/research/threat-profiles/copper-fieldstone',
  country: "Pakistan",
  name: "COPPER FIELDSTONE",
  objectives: ['Espionage'],
  aliases: ['Gorgon Group', 'Green Havildar (PWC)', 'Mythic Leopard (CrowdStrike)', 'Operation C-Major (Trend Micro)', 'Operation Transparent Tribe (Proofpoint)', 'ProjectM (Palo Alto)'],
  tools: ['Crimson RAT', 'DarkComet', 'LuminosityLink', 'njRAT', 'Peppy'],
  description: "COPPER FIELDSTONE is assessed by CTU researchers with moderate confidence on behalf of Pakistan, primarily targeting Indian diplomatic and military personnel. The group has developed and deployed at least two custom remote access trojans, Peppy and Crimson, as well as using commodity and open source tools including njRAT, LuminosityLink and DarkComet."
});

// IRON HUNTER
map.set('Threat Group: IRON HUNTER', {
  link: 'http://www.secureworks.com/research/threat-profiles/iron-hunter',
  country: "Russia",
  name: "IRON HUNTER",
  objectives: ['Espionage'],
  aliases: ['CTG-8875 (SCWX CTU)', 'ITG12 (IBM)', 'Turla', 'Venomous Bear (CrowdStrike)', 'Waterbug (Symantec)'],
  tools: ['Carbon-DLL', 'ComRAT', 'LightNeuron', 'Mosquito', 'Nautilus', 'Neuron', 'PoisonFrog', 'PyFlash', 'Skipper', 'Snake', 'Tavdig'],
  description: "The IRON HUNTER (also known as Turla) threat group targets government, diplomatic, and military organizations, including ministries of foreign affairs and embassies.It operates and maintains a large set of sophisticated malware, including the Snake rootkit, Agent.BTZ / ComRAT, Mosquito, and LightNeuron.IRON HUNTER tactics include strategic web compromises, themed phishing lures, fake software update files, and the use of satellite communication hijacking for command and control.CTU researchers assess with moderate confidence that IRON HUNTER is operated by a Russian intelligence service."
});

// IRON LIBERTY
map.set('Threat Group: IRON LIBERTY', {
  link: 'http://www.secureworks.com/research/threat-profiles/iron-liberty',
  country: "Russia",
  name: "IRON LIBERTY",
  objectives: ['Espionage'],
  aliases: ['LLANITE (Dragos)', 'CASTLE (SCWX CTU)', 'Crouching Yeti (Kaspersky)', 'Dragonfly (Symantec)', 'DYMALLOY (Dragos)', 'Energetic Bear / Berserk Bear (CrowdStrike)', 'TG-4192 (SCWX CTU)'],
  tools: ['ClientX', 'Ddex Loader', 'Havex', 'Karagany', 'Loek', 'MCMD', 'Sysmain', 'xfrost'],
  description: "Active since at least 2010, IRON LIBERTY has historically targeted the energy sector, including energy companies and organizations financing the energy vertical in the U.S. and Europe. Following public reporting of IRON LIBERTY's capabilities in 2014, CTU monitoring of the group's activity suggests that it stopped using its known tools and retired its infrastructure. In late 2016, IRON LIBERTY re-emerged with a campaign targeting the energy sector. CTU researchers temporarily tracked this activity as the CASTLE threat group, until links to IRON LIBERTY were verified."
});

// IRON TWILIGHT
map.set('Threat Group: IRON TWILIGHT', {
  link: 'http://www.secureworks.com/research/threat-profiles/iron-twilight',
  country: "Russia",
  name: "IRON TWILIGHT",
  objectives: ['Espionage'],
  aliases: ['APT28(FireEye)', 'Fancy Bear(Crowdstrike)', 'Group 74(Talos)', 'PawnStorm(Trend Micro)', 'Sednit(ESET)', 'Snakemackerel(iDefense)', 'Sofacy(Palo Alto)', 'STRONTIUM(Microsoft)', 'TG - 4127(SCWX CTU)', 'Tsar Team(iSight)'],
  tools: ['DEALERSCHOICE', 'Downdelph', 'EVILTOSS', 'HIDEDRV', 'LoJack', 'PowerShell Empire', 'Scaramouche', 'SCONATO', 'Sedkit Exploit Kit', 'SEDUPLOADER', 'SHARPFRONT', 'Sofacy downloader', 'X-Agent', 'X-Tunnel', 'Zebrocy'],
  description: "Active since at least 2009, the IRON TWILIGHT threat group targets media, governments, military, and international non-governmental organizations (NGOs) that often have a security focus. It appears to focus on political and military espionage and has used obtained material in 'active measures' operations and to retaliate against actions that the Russian government perceives as hostile. CTU researchers assess with high confidence that IRON TWILIGHT is operated by the GRU, Russia's military intelligence service."
});

// IRON VIKING
map.set('Threat Group: IRON VIKING', {
  link: 'http://www.secureworks.com/research/threat-profiles/iron-viking',
  country: "Russia",
  name: "IRON VIKING",
  objectives: ['Espionage'],
  aliases: ['BlackEnergy Group', 'CTG-7263 (SCWX CTU)', 'ELECTRUM (Dragos)', 'Hades/OlympicDestroyer (Kaspersky)', 'Qudedagh (F-Secure)', 'Sandworm Team (Trend Micro)', 'TEMP.Noble (FireEye)', 'Voodoo Bear (CrowdStrike)'],
  tools: ['BadRabbit', 'BlackEnergy', 'GCat', 'GreyEnergy', 'Industroyer', 'KillDisk', 'NotPetya', 'PSCrypt', 'TeleBot', 'TeleDoor', 'xData'],
  description: "IRON VIKING has been involved in multiple disruptive and destructive cyber campaigns since 2014. It has primarily targeted the government, energy, and financial sectors in Ukraine. CTU researchers assess with high confidence that IRON VIKING is operated by a Russian intelligence service. Based on similarities between the targeting activity of IRON VIKING and IRON TWILIGHT, the groups’ willingness to launch disruptive operations, and credible third party reporting linking IRON VIKING to the Russian General Staff Main Intelligence Directorate (GRU), CTU researchers assess with high confidence that IRON TWILIGHT and IRON VIKING are operated by the same Russian intelligence service."
});

// NICKEL ACADEMY
map.set('Threat Group: NICKEL ACADEMY', {
  link: 'http://www.secureworks.com/research/threat-profiles/nickel-academy',
  country: "North Korea",
  name: "NICKEL ACADEMY",
  objectives: ['Sabotage'],
  aliases: ['Black Artemis (PWC)', 'COVELLITE (Dragos)', 'CTG-2460 (SCWX CTU)', 'Dark Seoul', 'Guardians of Peace', 'HIDDEN COBRA (U.S. Government)', 'High Anonymous', 'Labyrinth Chollima (CrowdStrike)', 'New Romanic Cyber Army Team', 'NNPT Group', 'The Lazarus Group', 'Who Am I?', 'Whois Team', 'ZINC (Microsoft)'],
  tools: ['Brambul', 'DarkMessenger', 'DarkSeoul', 'Destover', 'Duuzer', 'HOPLIGHT', 'Joanap', 'KorHigh', 'LiveJinx', 'Volgmer'],
  description: "NICKEL ACADEMY is the SecureWorks identifier for cyber operations conducted on behalf of the North Korean government that have not been attributed to a tracked sub-group, like NICKEL GLADSTONE. While there may have been more than one agency or department conducting cyber operations in North Korea, CTU researchers assess with high confidence that the primary cyber operations are conducted from a single entity known as Reconnaissance General Bureau (RGB), a North Korean military intelligence organization charged with collecting foreign intelligence and conducting overseas traditional intelligence/covert operations."
});

// NICKEL GLADSTONE
map.set('Threat Group: NICKEL GLADSTONE', {
  link: 'http://www.secureworks.com/research/threat-profiles/nickel-gladstone',
  country: "North Korea",
  name: "NICKEL GLADSTONE",
  objectives: ['Financial Gain'],
  aliases: ['APT38 (FireEye)', 'Bluenoroff (Kaspersky)', 'CTG-6459 (SCWX CTU)', 'HIDDEN COBRA (U.S. Government)', 'Stardust Chollima (CrowdStrike)', 'The Lazarus Group'],
  tools: ['AlphaNC', 'Bankshot', 'CATCH22', 'CCGC_Proxy', 'Ratankba', 'Server_TrafficForwarder'],
  description: "NICKEL GLADSTONE is a targeted threat group that CTU researchers assess with high confidence is directed by the North Korean government. The group is focused on acquisitive crime, targeting financial institutions and operating online criminal activities for financial gain. NICKEL GLADSTONE came into prominence in February 2016, when the news broke about Bangladesh Central Bank's loss of USD $81 million dollars through fraudulent messages in the SWIFT network. Since then, additional financial institutions were discovered to be targets of similar operations, including banks in Vietnam, Ecuador, Taiwan, Chile and India. In February 2017, the group was likely responsible for compromising the Polish Financial Supervision Authority (PFSA) website to target Polish and other banks around the world, spanning in total 104 organizations in 31 countries."
});

// PLATINUM TERMINAL
map.set('Threat Group: PLATINUM TERMINAL', {
  link: 'http://www.secureworks.com/research/threat-profiles/platinum-terminal',
  country: "United States",
  name: "PLATINUM TERMINAL",
  objectives: ['Espionage', 'Surveillance'],
  aliases: ['APT-C-39 (Qihoo 360)', 'Longhorn (Symantec)', 'The Lamberts (Kaspersky)', 'Vault7 (Wikileaks)'],
  tools: ['AfterMidnight', 'Assassin', 'Marble Framework'],
  description: "In March 2017 Wikileaks began a series of public disclosures, under the project name 'Vault7', detailing offensive tools that it claimed were attributable to the United States (U.S.) Central Intelligence Agency (CIA). In April 2017, Symantec confirmed that the tools matched malware used by a group they called Longhorn. CTU researchers track this group as PLATINUM TERMINAL."
});

// TIN WOODLAWN
map.set('Threat Group: TIN WOODLAWN', {
  link: 'http://www.secureworks.com/research/threat-profiles/tin-woodlawn',
  country: "Vietnam",
  name: "TIN WOODLAWN",
  objectives: ['Espionage', 'Surveillance'],
  aliases: ['APT32 (FireEye)', 'Cobalt Kitty', 'OceanLotus', 'WOODLAWN (SCWX CTU)'],
  tools: ['Cobalt Strike', 'Denis', 'Goopy', 'JEShell', 'KerrDown', 'Mimikatz', 'Ratsnif', 'Remy', 'Rizzo', 'RolandRAT'],
  description: "TIN WOODLAWN is a targeted threat group, active since at least 2014, that CTU researchers assess with moderate confidence is operated or tasked by the Vietnamese government. It has targeted automotive manufacturers, media, non-governmental organizations, dissidents or social groups of interest to the Vietnamese government in Vietnam or overseas, and regional governance groups and national governments neighbouring Vietnam."
});

// TUNGSTEN BRIDGE
map.set('Threat Group: TUNGSTEN BRIDGE', {
  link: 'http://www.secureworks.com/research/threat-profiles/tungsten-bridge',
  country: "South Korea",
  name: "TUNGSTEN BRIDGE",
  objectives: ['Espionage'],
  aliases: ['CTG - 1948(SCWX CTU)', 'DarkHotel(Kaspersky)', 'DUBNIUM(Microsoft)'],
  tools: ['Nemim'],
  description: "TUNGSTEN BRIDGE, also known as 'DarkHotel', is a targeted threat group that CTU researchers assess with moderate confidence operates on behalf of South Korea. The group targets North Korea-linked organizations and personnel but also conducts operations that advances South Korean national interest by targeting global business executives."
});

// end threat groups links an descriptions


// tools links and descriptions
map.set("Tool: Mimikatz", {
  description: "Mimikatz is a credential dumper capable of obtaining plaintext Windows account logins and passwords, along with many other features that make it useful for testing the security of networks.",
  link: "https://attack.mitre.org/software/S0002/"
});

// Tool nodes
map.set('Tool: BlackShades', {
  description: ""
});
map.set('Tool: DarkComet', {
  link: "https://attack.mitre.org/software/S0334/",
  description: "DarkComet is a Windows remote administration tool and backdoor."
});

map.set('Tool: PoisonIvy', {
  description: ""
});
map.set('Tool: QuasarRAT', {
  link: "https://attack.mitre.org/software/S0262/",
  description: "QuasarRAT is an open-source, remote access tool that is publicly available on GitHub. QuasarRAT is developed in the C# language."
});
map.set('Tool: XtremeRat', {
  link: "https://www.fireeye.com/blog/threat-research/2014/02/xtremerat-nuisance-or-threat.html",
  description: "The XtremeRAT was developed by “xtremecoder” and has been available since at least 2010.  Written in Delphi, the code of XtremeRAT is shared amongst several other Delphi RAT projects including SpyNet, CyberGate, and Cerberus. The RAT is available for free; however, the developer charges 350 Euros for the source code."
});

map.set("Tool: Elise", {
  link: "https://attack.mitre.org/software/S0081/",
  description: "Elise is a custom backdoor Trojan that appears to be used exclusively by Lotus Blossom. It is part of a larger group of tools referred to as LStudio, ST Group, and APT0LSTU."
});

map.set('Tool: ABK', {
  link: "",
  description: ""
});
map.set('Tool: Daserf', {
  link: "https://attack.mitre.org/software/S0187/",
  description: "Daserf is a backdoor that has been used to spy on and steal from Japanese, South Korean, Russian, Singaporean, and Chinese victims. Researchers have identified versions written in both Visual C and Delphi."
});
map.set('Tool: xxmm', {
  link: "https://www.secureworks.com/research/bronze-butler-targets-japanese-businesses",
  description: "xxmm (also known as Minzen) — This RAT and likely successor to Daserf AES-encrypts HTTP communications using a one-time encryption key. As of this publication, BRONZE BUTLER demonstrates a preference for concurrently using Datper and xxmm in its operations. CTU researchers identified an xxmm builder for xxmm, which suggests that the threat actors customize the xxmm malware settings based on the target."
});

map.set("Tool: Conpee", {
  link: "https://www.secureworks.com/research/threat-group-3279-targets-the-video-game-industry",
  description: "Conpee is part of the \"PATX\" framework. The PlugMgr component, which communications with the \"PATX_SERVER\" C2 host, offers a reasonably full range of backdoor functionality, including the ability to load plugins with further capabilities."
});
map.set("Tool: PwDump", {
  link: "https://attack.mitre.org/software/S0006/",
  description: "pwdump is a credential dumper."
});

map.set("Tool: 9002", {
  link: "https://malpedia.caad.fkie.fraunhofer.de/details/win.9002",
  description: "9002 RAT is a Remote Access Tool typically observed to be used by an APT to control a victim's machine. It has been spread over via zero day exploits (e.g. targeting Internet Explorer) as well as via email attachments. The infection chain starts by opening a .LNK (an OLE packager shell object) that executes a Powershell command."
});
map.set("Tool: China Chopper", {
  link: "https://attack.mitre.org/software/S0020/",
  description: "China Chopper is a Web Shell hosted on Web servers to provide access back into an enterprise network that does not rely on an infected system calling back to a remote command and control server. It has been used by several threat groups."
});
map.set("Tool: HKDoor", {
  link: "https://threatvector.cylance.com/en_us/home/threat-spotlight-opening-hackers-door.html",
  description: "The malware consists of a dropper that contains an embedded DLL in its resource section. The DLL is the main backdoor payload that also drops an additional rootkit driver that is used for covert communications."
});
map.set("Tool: NewCT", {
  link: "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-operation-quantum-entanglement.pdf",
  description: "NewCT RAT evolved from older versions called \“CT\”, which has been observed being used in association with the \“Nflog\” Backdoor."
});
map.set("Tool: NFLog", {
  link: "https://www.trendmicro.com/vinfo/us/threat-encyclopedia/malware/nflog",
  description: "NFLOG variants are capable of executing commands from remote malicious users."
});
map.set("Tool: Smac", {
  link: "https://www.trendmicro.com/vinfo/us/threat-encyclopedia/malware/troj_fraud.smac",
  description: "This Trojan arrives on a system as a file dropped by other malware or as a file downloaded unknowingly by users when visiting malicious sites."
});

map.set("Tool: PowerShell Empire", {
  link: "https://www.carbonblack.com/2015/08/14/how-to-detect-powershell-empire-with-carbon-black/",
  description: "PowerShell Empire enables one to rapidly configure, build, and deploy various PowerShell launchers that communicate back to a command-and-control (C&C) listener operating on a Debian Linux server. From here, an attacker can issue any number of PowerShell commands or employ a wide variety of modules for further entrenchment and exploitation within a target environment."
});
map.set("Tool: Zuguo", {
  link: "",
  description: ""
})

map.set("Tool: Alice\'s Rabbit Hole", {
  link: "",
  description: ""
});
map.set("Tool: Briba", {
  link: "https://attack.mitre.org/software/S0204/",
  description: "Briba is a trojan used by Elderwood to open a backdoor and download files on to compromised hosts."
});
map.set("Tool: Derusbi", {
  link: "https://attack.mitre.org/software/S0021/",
  description: "Derusbi is malware used by multiple Chinese APT groups. Both Windows and Linux variants have been observed."
});

map.set("Tool: Binanen", {
  link: "https://malpedia.caad.fkie.fraunhofer.de/details/win.binanen",
  description: "Binanen is a dropper that drops and executes a section of itself into a hidden dummy process."
});
map.set("Tool: Comfoo", {
  link: "https://www.secureworks.com/research/secrets-of-the-comfoo-masters",
  description: "To maintain persistence on the system, Comfoo usually replaces the path to the DLL of an existing unused service rather than installing a new service."
});
map.set("Tool: Isastart", {
  link: "",
  description: ""
});
map.set("Tool: Leouncia", {
  link: "https://www.fireeye.com/blog/threat-research/2010/12/leouncia-yet-another-backdoor.html",
  description: "Leouncia is a powerful backdoor that is designed to take complete control over the infected machine."
});
map.set("Tool: OrcaRAT", {
  link: "https://malpedia.caad.fkie.fraunhofer.de/details/win.orcarat",
  description: "OrcaRAT is a Backdoor that targets the Windows platform. It has been reported that a variant of this malware has been used in a targeted attack. It contacts a remote server, sending system information. Moreover, it receives control commands to execute shell commands, and download/upload a file, among other actions."
});
map.set("Tool: PCShare", {
  link: "",
  description: ""
});
map.set("Tool: Skeleton Key", {
  link: "https://attack.mitre.org/software/S0007/",
  description: "Skeleton Key is malware used to inject false credentials into domain controllers with the intent of creating a backdoor password. Functionality similar to Skeleton Key is included as a module in Mimikatz."
});
map.set("Tool: SlyPidgin", {
  link: "",
  description: ""
});
map.set("Tool: VinSelf", {
  link: "",
  description: ""
});

map.set("Tool: Lecna", {
  link: "",
  description: "TODO"
});

map.set("Tool: AgentDrable", {
  link: "",
  description: "TODO"
});
map.set("Tool: DNSpionage", {
  link: "",
  description: "TODO"
});
map.set("Tool: Karkoff", {
  link: "",
  description: "TODO"
});
map.set("Tool: TWOTONE", {
  link: "",
  description: "TODO"
});

map.set("Tool: TWOTONE", {
  link: "",
  description: "TODO"
});
map.set("Tool: Glimpse", {
  link: "",
  description: "TODO"
});
map.set("Tool: Helminth", {
  link: "https://attack.mitre.org/software/S0170/",
  description: "Helminth is a backdoor that has at least two variants - one written in VBScript and PowerShell that is delivered via a macros in Excel spreadsheets, and one that is a standalone Windows executable."
});
map.set("Tool: Jason", {
  link: "",
  description: "TODO"
});
map.set("Tool: MacDownloader", {
  link: "",
  description: "TODO"
});
map.set("Tool: PoisonFrog", {
  link: "",
  description: "TODO"
});
map.set("Tool: PupyRAT", {
  link: "",
  description: ""
});
map.set("Tool: RGDoor", {
  link: "https://attack.mitre.org/software/S0258/",
  description: "RGDoor is a malicious Internet Information Services (IIS) backdoor developed in the C++ language. RGDoor has been seen deployed on webservers belonging to the Middle East government organizations. RGDoor provides backdoor access to compromised IIS servers."
});
map.set("Tool: ThreeDollars", {
  link: "",
  description: "TODO"
});
map.set("Tool: TinyZbot", {
  link: "https://attack.mitre.org/software/S0004/",
  description: "TinyZBot is a bot written in C# that was developed by Cleaver."
});
map.set("Tool: Toxocara", {
  link: "",
  description: ""
});
map.set("Tool: Trichuris", {
  link: "",
  description: ""
});
map.set("Tool: TwoFace", {
  link: "",
  description: ""
});

map.set("Tool: MechaFlounder", {
  link: "",
  description: ""
});
map.set("Tool: Mimikatz", {
  description: "Mimikatz is a credential dumper capable of obtaining plaintext Windows account logins and passwords, along with many other features that make it useful for testing the security of networks.",
  link: "https://attack.mitre.org/software/S0002/"
});
map.set("Tool: Remexi", {
  link: "https://attack.mitre.org/software/S0375/",
  description: "Remexi is a Windows-based Trojan that was developed in the C programming language."
});
map.set("Tool: TREKX", {
  link: "",
  description: ""
});

map.set("Tool: HARDCANDY", {
  link: "",
  description: ""
});
map.set("Tool: SABER1", {
  link: "",
  description: ""
});
map.set("Tool: SABER2", {
  link: "",
  description: ""
});
map.set("Tool: ZooPark", {
  description: "ZooPark is a cyberespionage operation that has been focusing on Middle Eastern targets since at least June 2015. The threat actors behind the operation infect Android devices using several generations of malware, with the attackers including new features in each iteration. We label them from v1-v4, with v4 being the most recent version deployed in 2017. From the technical point of view, the evolution of ZooPark has shown notable progress: from the very basic first and second versions, the commercial spyware fork in its third version and then to the complex spyware that is version 4. This last step is especially interesting, showing a big leap from straightforward code functionality to highly sophisticated malware.",
  link: "https://securelist.com/whos-who-in-the-zoo/85394/"
});

map.set("Tool: CASHY200", {
  link: "",
  description: ""
});
map.set("Tool: Diezen", {
  link: "",
  description: "TODO"
});
map.set("Tool: Eye", {
  link: "",
  description: ""
});
map.set("Tool: Gon", {
  link: "",
  description: ""
});
map.set("Tool: Hisoka", {
  link: "",
  description: ""
});
map.set("Tool: Hisoka Netero", {
  link: "",
  description: ""
});
map.set("Tool: HyphenShell", {
  description: ""
});
map.set("Tool: Killua", {
  link: "",
  description: ""
});
map.set("Tool: Sakabota Framework", {
  link: "",
  description: ""
});

map.set("Tool: DanBot", {
  link: "",
  description: ""
});

map.set("Tool: AutoCore", {
  link: "",
  description: ""
});
map.set("Tool: Cadlotcorg", {
  link: "",
  description: ""
});
map.set("Tool: Dello RAT", {
  link: "",
  description: ""
});
map.set("Tool: Imminent Monitor", {
  link: "",
  description: ""
});
map.set("Tool: KDALogger", {
  link: "",
  description: ""
});
map.set("Tool: Koadic", {
  link: "https://attack.mitre.org/software/S0250/",
  description: "Koadic is a Windows post-exploitation framework and penetration testing tool. Koadic is publicly available on GitHub and the tool is executed via the command-line. Koadic has several options for staging payloads and creating implants."
});
map.set("Tool: NanoCore", {
  link: "https://attack.mitre.org/software/S0250/",
  description: "NanoCore is a modular remote access tool developed in .NET that can be used to spy on victims and steal information. It has been used by threat actors since 2013."
});
map.set("Tool: NetWire", {
  link: "",
  description: ""
});
map.set("Tool: PoshC2", {
  link: "https://attack.mitre.org/software/S0378/",
  description: "PoshC2 is an open source remote administration and post-exploitation framework that is publicly available on GitHub. The server-side components of the tool are primarily written in Python, while the implants are written in PowerShell. Although PoshC2 is primarily focused on Windows implantation, it does contain a basic Python dropper for Linux/macOS."
});
map.set("Tool: POWERTON", {
  link: "https://attack.mitre.org/software/S0371/",
  description: "POWERTON is a custom PowerShell backdoor first observed in 2018. It has typically been deployed as a late-stage backdoor by APT33. At least two variants of the backdoor have been identified, with the later version containing improved functionality."
});
map.set("Tool: Poylog", {
  link: "",
  description: ""
});
map.set("Tool: Schoolbag", {
  link: "",
  description: ""
});

map.set("Tool: FORELORD", {
  link: "",
  description: ""
});
map.set("Tool: LaZagne", {
  link: "https://attack.mitre.org/software/S0349/",
  description: "LaZagne is a post-exploitation, open-source tool used to recover stored passwords on a system. It has modules for Windows, Linux, and OSX, but is mainly focused on Windows systems. LaZagne is publicly available on GitHub."
});
map.set("Tool: Metasploit", {
  link: "",
  description: ""
});
map.set("Tool: PowerStats", {
  link: "https://attack.mitre.org/software/S0223/",
  description: "POWERSTATS is a PowerShell-based first stage backdoor used by MuddyWater."
});

map.set("Tool: Crimson RAT", {
  link: "https://attack.mitre.org/software/S0115/",
  description: "Crimson is malware used as part of a campaign known as Operation Transparent Tribe that targeted Indian diplomatic and military victims."
});
map.set("Tool: LuminosityLink", {
  link: "",
  description: ""
});
map.set("Tool: njRAT", {
  link: "https://attack.mitre.org/software/S0385/",
  description: "njRAT is a remote access tool (RAT) that was first observed in 2012. It has been used by threat actors in the Middle East."
});
map.set("Tool: Peppy", {
  link: "",
  description: ""
});

map.set("Tool: Carbon-DLL", {
  link: "https://attack.mitre.org/software/S0335/",
  description: "Carbon is a sophisticated, second-stage backdoor and framework that can be used to steal sensitive information from victims. Carbon has been selectively used by Turla to target government and foreign affairs-related organizations in Central Asia."
});
map.set("Tool: ComRAT", {
  link: "https://attack.mitre.org/software/S0126/",
  description: "ComRAT is a remote access tool suspected of being a decedent of Agent.btz and used by Turla."
});
map.set("Tool: LightNeuron", {
  link: "https://attack.mitre.org/software/S0395/",
  description: "LightNeuron is a sophisticated backdoor that has targeted Microsoft Exchange servers since at least 2014. LightNeuron has been used by Turla to target diplomatic and foreign affairs-related organizations. The presence of certain strings in the malware suggests a Linux variant of LightNeuron exists."
});
map.set("Tool: Mosquito", {
  link: "https://attack.mitre.org/software/S0256/",
  description: "Mosquito is a Win32 backdoor that has been used by Turla. Mosquito is made up of three parts: the installer, the launcher, and the backdoor. The main backdoor is called CommanderDLL and is launched by the loader program."
});
map.set("Tool: Nautilus", {
  link: "",
  description: "TODO"
});
map.set("Tool: Neuron", {
  link: "",
  description: ""
});
map.set("Tool: PyFlash", {
  link: "",
  description: ""
});
map.set("Tool: Skipper", {
  link: "",
  description: ""
});
map.set("Tool: Snake", {
  link: "",
  description: ""
});
map.set("Tool: Tavdig", {
  link: "",
  description: ""
});

map.set("Tool: ClientX", {
  link: "",
  description: ""
});
map.set("Tool: Ddex Loader", {
  link: "",
  description: ""
});
map.set("Tool: Havex", {
  link: "",
  description: ""
});
map.set("Tool: Karagany", {
  link: "https://attack.mitre.org/software/S0094/",
  description: "Trojan.Karagany is a backdoor primarily used for recon. The source code for it was leaked in 2010 and it is sold on underground forums."
});
map.set("Tool: Loek", {
  link: "",
  description: ""
});
map.set("Tool: MCMD", {
  link: "",
  description: ""
});
map.set("Tool: Sysmain", {
  link: "",
  description: ""
});
map.set("Tool: xfrost", {
  link: "",
  description: ""
});

map.set("Tool: DEALERSCHOICE", {
  link: "https://attack.mitre.org/software/S0243/",
  description: "DealersChoice is a Flash exploitation framework used by APT28."
});
map.set("Tool: Downdelph", {
  link: "https://attack.mitre.org/software/S0134/",
  description: "Downdelph is a first-stage downloader written in Delphi that has been used by APT28 in rare instances between 2013 and 2015."
});
map.set("Tool: EVILTOSS", {
  link: "",
  description: ""
});
map.set("Tool: HIDEDRV", {
  link: "https://attack.mitre.org/software/S0135/",
  description: "HIDEDRV is a rootkit used by APT28. It has been deployed along with Downdelph to execute and hide that malware."
});
map.set("Tool: LoJack", {
  link: "",
  description: ""
});
map.set("Tool: Scaramouche", {
  link: "",
  description: ""
});
map.set("Tool: Sedkit Exploit Kit", {
  link: "",
  description: ""
});
map.set("Tool: SEDUPLOADER", {
  link: "",
  description: ""
});
map.set("Tool: SHARPFRONT", {
  link: "",
  description: ""
});
map.set("Tool: Sofacy downloader", {
  link: "",
  description: ""
});
map.set("Tool: X-Agent", {
  link: "",
  description: ""
});
map.set("Tool: X-Tunnel", {
  link: "https://attack.mitre.org/software/S0117/",
  description: "XTunnel a VPN-like network proxy tool that can relay traffic between a C2 server and a victim. It was first seen in May 2013 and reportedly used by APT28 during the compromise of the Democratic National Committee."
});
map.set("Tool: Zebrocy", {
  link: "",
  description: ""
});

map.set("Tool: BadRabbit", {
  link: "",
  description: ""
});
map.set("Tool: BlackEnergy", {
  link: "https://attack.mitre.org/software/S0089/",
  description: "BlackEnergy is a malware toolkit that has been used by both criminal and APT actors. It dates back to at least 2007 and was originally designed to create botnets for use in conducting Distributed Denial of Service (DDoS) attacks, but its use has evolved to support various plug-ins."
});
map.set("Tool: GCat", {
  link: "",
  description: ""
});
map.set("Tool: GreyEnergy", {
  link: "https://attack.mitre.org/software/S0342/",
  description: "GreyEnergy is a backdoor written in C and compiled in Visual Studio. GreyEnergy shares similarities with the BlackEnergy malware and is thought to be the successor of it."
});
map.set("Tool: Industroyer", {
  link: "",
  description: ""
});
map.set("Tool: KillDisk", {
  link: "",
  description: ""
});
map.set("Tool: NotPetya", {
  link: "https://attack.mitre.org/software/S0368/",
  description: "NotPetya is malware that was first seen in a worldwide attack starting on June 27, 2017. The main purpose of the malware appeared to be to effectively destroy data and disk structures on compromised systems. Though NotPetya presents itself as a form of ransomware, it appears likely that the attackers never intended to make the encrypted data recoverable."
});
map.set("Tool: PSCrypt", {
  link: "",
  description: ""
});
map.set("Tool: TeleBot", {
  link: "",
  description: ""
});
map.set("Tool: TeleDoor", {
  link: "",
  description: ""
});
map.set("Tool: xData", {
  link: "",
  description: ""
});

map.set("Tool: Brambul", {
  link: "",
  description: ""
});
map.set("Tool: DarkMessenger", {
  link: "",
  description: ""
});
map.set("Tool: DarkSeoul", {
  link: "",
  description: ""
});
map.set("Tool: Destover", {
  link: "",
  description: ""
});
map.set("Tool: Duuzer", {
  link: "",
  description: ""
});
map.set("Tool: HOPLIGHT", {
  link: "https://attack.mitre.org/software/S0376/",
  description: "HOPLIGHT is a backdoor Trojan that has reportedly been used by the North Korean government."
});
map.set("Tool: Joanap", {
  link: "",
  description: ""
});
map.set("Tool: KorHigh", {
  link: "",
  description: ""
});
map.set("Tool: LiveJinx", {
  link: "",
  description: ""
});
map.set("Tool: Volgmer", {
  link: "https://attack.mitre.org/software/S0180/",
  description: "Volgmer is a backdoor Trojan designed to provide covert access to a compromised system. It has been used since at least 2013 to target the government, financial, automotive, and media industries. Its primary delivery mechanism is suspected to be spearphishing."
});

map.set("Tool: AfterMidnight", {
  link: "",
  description: ""
});
map.set("Tool: Assassin", {
  link: "",
  description: ""
});
map.set("Tool: Marble Framework", {
  link: "",
  description: ""
});

map.set("Tool: Cobalt Strike", {
  link: "https://attack.mitre.org/software/S0154/",
  description: "Cobalt Strike is a commercial, full-featured, penetration testing tool which bills itself as “adversary simulation software designed to execute targeted attacks and emulate the post-exploitation actions of advanced threat actors”."
});
map.set("Tool: Denis", {
  link: "https://attack.mitre.org/software/S0354/",
  description: "Denis is a Windows backdoor and Trojan"
});
map.set("Tool: Goopy", {
  link: "",
  description: ""
});
map.set("Tool: JEShell", {
  link: "",
  description: ""
});
map.set("Tool: KerrDown", {
  link: "",
  description: ""
});
map.set("Tool: Ratsnif", {
  link: "",
  description: ""
});
map.set("Tool: Remy", {
  link: "",
  description: ""
});
map.set("Tool: Rizzo", {
  link: "",
  description: ""
});
map.set("Tool: RolandRAT", {
  link: "",
  description: ""
});

map.set("Tool: Nemim", {
  link: "",
  description: ""
});



// end tools links and descriptions

function getDescription(name) {
  if (map.has(name)) {
    return map.get(name).description;
  } else {
    return "No description";
  }
}



function getLink(name) {
  if (map.has(name)) {
    return map.get(name).link;
  } else {
    return "No link";
  }
}
