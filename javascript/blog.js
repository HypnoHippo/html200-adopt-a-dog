const blogs = [
  {
    imageAlt: "A person with their arm around a black dog as they sit on a cliff",
    headline: "Traveling With Your Dog",
    text: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.<br><br>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
  },
  {
    imageAlt: "Four dogs all leashed up and sitting together at a park",
    headline: "How To Walk Multiple Dogs",
    text: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.<br><br>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
  },
  {
    imageAlt: "A person playing fetch with their dog at sunset",
    headline: "Teach Your Dog Fetch!",
    text: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.<br><br>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
  }
];

const section = document.getElementById('main');

for (let i = 0; i < blogs.length; i += 1) {
  const blog = blogs[i];

  const article  = document.createElement("ARTICLE");
  article.setAttribute('class', 'full-article');
  section.appendChild(article);

  const img = document.createElement('IMG');
  img.src = "images/blog-" + (Number([i])+Number(1)) + ".jpg";
  img.alt = blog.imageAlt;
  article.appendChild(img);

  const div = document.createElement('DIV');
  div.setAttribute('class', 'blog-text');
  article.appendChild(div);

  const headline = document.createElement("H3");
  headline.textContent = blog.headline;
  div.appendChild(headline);

  const text = document.createElement("P");
  text.innerHTML = blog.text;
  div.appendChild(text);
}
