

const SyntaxPage = () => {
  const SyntaxRules = [
    {
      rule: 'Colors and Color Identity',
      description: "You can find cards that are a certain color using the c: or color: keyword, and cards that are a certain color identity using the id: or identity: keywords, Both sets of keywords accepts full color names like blue or the abbreviated color letters w, u, r, b and g"
      
    },
    {
      rule: "Card Types",
      description: "Find cards of a certain card type with the t: or type: keywords. You can search for any supertype, card type, or subtype,Using only partial words is allowed."
    },
    {
      rule: "Card Text",
      description: "Use the o: or oracle: keywords to find cards that have specific phrases in their text box. You can put quotes around text with punctuation or spaces. You can use ~ in your text as a placeholder for the card’s name. This keyword usually checks the current Oracle text for cards, so it uses the most up-to-date phrasing available. For example, “dies” instead of “is put into a graveyard”. Use the fo: operator to search full Oracle text only, which includes reminder text. You can also use keyword: to search for cards with a specific keyword ability."
    },
    {
      rule: "Mana Costs",
      description: "Use the m: or mana: keyword to search for cards that have certain symbols in their mana costs. This keyword uses the official text version of mana costs set forth in the Comprehensive Rules. For example, {G} represents a green mana. Shorthand for is allowed for symbols that aren’t split: G is the same as {G} However, you must always wrap complex/split symbols like {2/G} in braces. You can search for mana costs using comparison operators; a mana cost is greater than another if it includes all the same symbols and more, and it’s less if it includes only a subset of symbols. You can find cards of a specific mana value with manavalue or mv, comparing with a numeric expression (>, <, =, >=, <=, and !=). You can also find even or odd mana costs with manavalue:even or manavalue:odd You can filter cards that contain hybrid mana symbols with is:hybrid or Phyrexian mana symbols with is:phyrexian. You can find permanents that provide specific levels of devotion, using either single-color mana symbols for devotion to one color, or hybrid symbols for devotion to two, with devotion: or a comparison operator. You can also find cards that produce specific types of mana, with produces:"
    },
    {
      rule: "Power, Toughness, and Loyalty",
      description: "You can use numeric expressions (>, <, =, >=, <=, and !=) to find cards with certain power, power/pow, toughness, toughness/tou, total power and toughness, pt/powtou, or starting loyalty, loyalty/loy. You can compare the values with each other or with a provided number."
    },
    {
      rule: "Multi-Faced Cards",
      description: "You can find cards that have more than one face with is:split (split cards), is:flip (flip cards), is:transform (cards that transform), is:meld (cards that meld), is:leveler (cards with Level Up), is:dfc (double-faced cards), and is:mdfc (modal double-faced cards)."
    },
    {
      rule: "Spells, Permanents, and Effects",
      description: "Find cards that are cast as spells with is:spell. Find permanent cards with is:permanent, historic cards with is:historic, creatures that can be in your party with is:party, modal effects with is:modal, vanilla creatures with is:vanilla, or French vanilla cards with is:frenchvanilla. Find 2/2/2 “bear” creatures with is:bear."
    },
    {
      rule: "Extra Cards and Funny Cards",
      description: "Vanguard, plane, scheme, and phenomenon cards are hidden by default, as are cards from “memorabilia” sets. You must either search for their type (using the t: keyword) or a set that contains them (the e: keyword).Un-cards, holiday cards, and other funny cards are findable with is:funny or mentioning their set.You may also use include:extras to reveal absolutely every card when you search."
    },
    {
      rule: "Rarity",
      description: "Use r: or rarity: to find cards by their print rarity. You can search for common, uncommon, rare, ‘special’, mythic, and ‘bonus’. You can also use comparison operators like < and >=. Use new:rarity to find reprint cards printed at a new rarity for the first time. You can find cards that have ever been printed in a given rarity using in: (for example, in:rare to find cards that have ever been printed at rare.)"
    },
    {
      rule: "Sets and Blocks",
      description: "Use s:, e:, set:, or edition: to find cards using their Magic set code. Use cn: or number: to find cards by collector number within a set. Combine this with s: to find specific card editions. Searching by ranges with a syntax like cn>50 is also possible. Use b: or block: to find cards in a Magic block by providing the three-letter code for any set in that block. The in: keyword finds cards that once “passed through” the given set code. For example in:lea would only match cards that once appeared in Alpha. You can search for cards based on the type of product they appear in. This includes the primary product types (st:core, st:expansion, or st:draftinnovation), as well as series of products (st:masters, st:funny, st:commander, st:duel_deck, st:from_the_vault, st:spellbook, or st:premium_deck) and more specialized types (st:alchemy, st:archenemy, st:masterpiece, st:memorabilia, st:planechase, st:promo, st:starter, st:token, st:treasure_chest, or st:vanguard.) The in: keyword also supports these set types, so you can search for cards with no printings in a set type with a query like -in:core. You can also search for individual cards that were sold in certain places with is:booster or is:planeswalker_deck, or specific types of promo cards with is: queries like is:league, is:buyabox, is:giftbox, is:intro_pack, is:gameday, is:prerelease, is:release, is:fnm, is:judge_gift, is:arena_league, is:player_rewards, is:media_insert, is:instore, is:convention, or is:set_promo, among others."
    },
    {
      rule: "USD/EUR/TIX prices",
      description: "You can find prints within certain usd, eur, tix price ranges by comparing them with a numeric expression (>, <, =, >=, <=, and !=). You can find the cheapest print of each card with cheapest:usd, cheapest:eur, and cheapest:tix."
    },
    {
      rule: "Shorcuts and Nicknames",
      description: "The search system includes a few convenience shortcuts for common card sets: You can find some interesting land groups with is:bikeland (alias cycleland, bicycleland), is:bounceland (alias karoo), is:canopyland (alias canland), is:checkland, is:dual, is:fastland, is:fetchland, is:filterland, is:gainland, is:painland, is:scryland, is:shadowland, is:shockland, is:storageland, is:creatureland, is:triland, and is:tangoland (alias battleland) You can find all Masterpiece Series cards with is:masterpiece"
    },
    {
      rule: "Display Keywords",
      description: "You can enter your display options for searches as keywords rather than using the controls on the page. Select how duplicate results are eliminated with unique:cards, unique:prints (previously ++), or unique:art (also @@). Change how results are shown with display:grid, display:checklist, display:full, or display:text. Change how results are sorted with order:artist, order:cmc, order:power, order:toughness, order:set, order:name, order:usd, order:tix, order:eur, order:rarity, order:color, order:released, order:spoiled, order:edhrec, order:penny, or order:review. Select what printings of cards to preferentially show with prefer:oldest, prefer:newest, prefer:usd-low or prefer:usd-high (and the equivalents for tix and eur), or prefer:promo. Change the order of the sorted data with direction:asc or direction:desc."
    }

  ];

  return (
   
      <div className="syntax-grid">
      <h2>Syntax Rules</h2>
      {SyntaxRules.map((rule, index) => (
        <div className="syntax-card" key={index}>
          <h3>{rule.rule}</h3>
          <p>{rule.description}</p>
          </div>
      ))}
      </div>
  );
};

  export default SyntaxPage;