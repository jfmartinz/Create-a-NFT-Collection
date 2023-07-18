const NFTS = []

function mintNFT(githubUsername, starsEarned, totalCommits, totalPrs, totalIssues){
    const NFT = {
      githubUser: githubUsername,
      stars: starsEarned,
      commits: totalCommits,
      prs: totalPrs,
      issues: totalIssues 
    }
    console.log("Minted: " + githubUsername)
    NFTS.push(NFT);
}


function listNFTS(){
    for(let i = 0; i < NFTS.length; i++){
        console.table(NFTS[i])
    }
}

function getTotalSupply(){
    console.log("Total NFT's: " + NFTS.length)
}

mintNFT("jfmartinz", 17, 441, 36, 47);
mintNFT("speed", 17, 441, 36, 47);
mintNFT("faker", 17, 441, 36, 47);




listNFTS();
getTotalSupply()


