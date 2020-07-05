var search_data = {"index":{"searchIndex":["arboltrie","buscadorpalabras","pruebaarboltrie","pruebabuscadorpalabras","agregar()","agregar()","analizar()","buscar()","buscar()","buscar_contexto()","hijos()","imp()","imp_aux()","imprimir_trie()","new()","new()","reconstruir_palabras()","reconstruir_palabras_nodo()","relacion()","setup()","test_cadena_vacia()","test_contener_todas_las_palabras_guardadas()","test_dos_cadenas_l1_prefijo0()","test_dos_cadenas_l2_prefijo0()","test_una_cadena_l0_una_cadena_l1_prefijo1()","test_una_cadena_l1()","test_una_cadena_l1_una_cadena_l2_prefijo1()","test_una_cadena_l1_y_una_cadena_l2_prefijo0()","test_una_cadena_l2()","test_una_cadena_l3_una_cadena_l3_espacio1_prefijo1()","test_una_ocurrencia_con_contexto()","test_una_ocurrencia_sin_contexto()","test_vacio()","test_vacio()","test_varias_ocurrencias_con_contexto()","trie()","verificar_consistencia()","license","readme","rakefile"],"longSearchIndex":["arboltrie","buscadorpalabras","pruebaarboltrie","pruebabuscadorpalabras","arboltrie#agregar()","buscadorpalabras#agregar()","buscadorpalabras#analizar()","arboltrie#buscar()","buscadorpalabras#buscar()","arboltrie#buscar_contexto()","arboltrie#hijos()","arboltrie#imp()","arboltrie#imp_aux()","buscadorpalabras#imprimir_trie()","arboltrie::new()","buscadorpalabras::new()","buscadorpalabras#reconstruir_palabras()","arboltrie#reconstruir_palabras_nodo()","arboltrie#relacion()","pruebaarboltrie#setup()","pruebaarboltrie#test_cadena_vacia()","pruebabuscadorpalabras#test_contener_todas_las_palabras_guardadas()","pruebaarboltrie#test_dos_cadenas_l1_prefijo0()","pruebaarboltrie#test_dos_cadenas_l2_prefijo0()","pruebaarboltrie#test_una_cadena_l0_una_cadena_l1_prefijo1()","pruebaarboltrie#test_una_cadena_l1()","pruebaarboltrie#test_una_cadena_l1_una_cadena_l2_prefijo1()","pruebaarboltrie#test_una_cadena_l1_y_una_cadena_l2_prefijo0()","pruebaarboltrie#test_una_cadena_l2()","pruebaarboltrie#test_una_cadena_l3_una_cadena_l3_espacio1_prefijo1()","pruebabuscadorpalabras#test_una_ocurrencia_con_contexto()","pruebabuscadorpalabras#test_una_ocurrencia_sin_contexto()","pruebaarboltrie#test_vacio()","pruebabuscadorpalabras#test_vacio()","pruebabuscadorpalabras#test_varias_ocurrencias_con_contexto()","buscadorpalabras#trie()","arboltrie#verificar_consistencia()","","",""],"info":[["ArbolTrie","","ArbolTrie.html","","<p>Árbol Trie \n<p>Es un árbol n-ario que permite almacenar varias cadenas para después buscarlas eficientemente. …\n"],["BuscadorPalabras","","BuscadorPalabras.html","","<p>buscador para la busqueda de palabras y su contexto. para la busqueda de palabras se utiliza un trie, …\n"],["PruebaArbolTrie","","PruebaArbolTrie.html","",""],["PruebaBuscadorPalabras","","PruebaBuscadorPalabras.html","",""],["agregar","ArbolTrie","ArbolTrie.html#method-i-agregar","(cadena, relacion)","<p>Agrega al trie la <code>cadena</code> con los datos asociados\n<p><code>cadena</code> es la cadena que se agrega\n<p><code>relacion</code> son los datos …\n"],["agregar","BuscadorPalabras","BuscadorPalabras.html#method-i-agregar","(palabra, relacion)","<p>Se ingresa una palabra al buscador\n<p>Parametros: el primer parametro es la palabra y el segundo parametro …\n"],["analizar","BuscadorPalabras","BuscadorPalabras.html#method-i-analizar","(texto, tam_contexto)","<p>Busca todas las palabras de un texto en el trie, retorna las ocurrencias y las relaciones de cada palabra …\n"],["buscar","ArbolTrie","ArbolTrie.html#method-i-buscar","(cadena)","<p>Determina si la <code>cadena</code> dada está en el trie\n<p>Busca la primera letra de la cadena entre los hijos del nodo …\n"],["buscar","BuscadorPalabras","BuscadorPalabras.html#method-i-buscar","(palabra)","<p>busca una palabra\n<p>Parametros: recibe como parametro la palabra que se va a buscar Retorno: true en caso …\n"],["buscar_contexto","ArbolTrie","ArbolTrie.html#method-i-buscar_contexto","(contexto, numero_palabra, iter, cadena)","<p>Determina si una sublista inicial de la lista de palabras <code>contexto</code> está en el trie como una cadena\n<p><code>contexto</code> …\n"],["hijos","ArbolTrie","ArbolTrie.html#method-i-hijos","()","<p>Retorna el Hash de hijos\n"],["imp","ArbolTrie","ArbolTrie.html#method-i-imp","()","<p>Imprime el trie indentado\n"],["imp_aux","ArbolTrie","ArbolTrie.html#method-i-imp_aux","(profundidad)","<p>Imprime el trie indentado de acuerdo a la profundidad con respecto a la raiz\n"],["imprimir_trie","BuscadorPalabras","BuscadorPalabras.html#method-i-imprimir_trie","()","<p>imprime los nodos del arbol\n"],["new","ArbolTrie","ArbolTrie.html#method-c-new","()","<p>Constructora del trie vacío\n"],["new","BuscadorPalabras","BuscadorPalabras.html#method-c-new","()","<p>se inicializa el trie\n"],["reconstruir_palabras","BuscadorPalabras","BuscadorPalabras.html#method-i-reconstruir_palabras","()","<p>reconstruye las palabras a partir de las palabras guardadas en el trie Retorno: lista de cadenas\n"],["reconstruir_palabras_nodo","ArbolTrie","ArbolTrie.html#method-i-reconstruir_palabras_nodo","(palabra, palabras)","<p>Agrega a <code>palabras</code> la lista de palabras almacenadas en el trie\n<p><code>palabra</code> es prefijo que lleva <code>palabras</code> es …\n"],["relacion","ArbolTrie","ArbolTrie.html#method-i-relacion","()","<p>Retorna el Set de datos\n"],["setup","PruebaArbolTrie","PruebaArbolTrie.html#method-i-setup","()",""],["test_cadena_vacia","PruebaArbolTrie","PruebaArbolTrie.html#method-i-test_cadena_vacia","()",""],["test_contener_todas_las_palabras_guardadas","PruebaBuscadorPalabras","PruebaBuscadorPalabras.html#method-i-test_contener_todas_las_palabras_guardadas","()",""],["test_dos_cadenas_l1_prefijo0","PruebaArbolTrie","PruebaArbolTrie.html#method-i-test_dos_cadenas_l1_prefijo0","()",""],["test_dos_cadenas_l2_prefijo0","PruebaArbolTrie","PruebaArbolTrie.html#method-i-test_dos_cadenas_l2_prefijo0","()",""],["test_una_cadena_l0_una_cadena_l1_prefijo1","PruebaArbolTrie","PruebaArbolTrie.html#method-i-test_una_cadena_l0_una_cadena_l1_prefijo1","()",""],["test_una_cadena_l1","PruebaArbolTrie","PruebaArbolTrie.html#method-i-test_una_cadena_l1","()",""],["test_una_cadena_l1_una_cadena_l2_prefijo1","PruebaArbolTrie","PruebaArbolTrie.html#method-i-test_una_cadena_l1_una_cadena_l2_prefijo1","()",""],["test_una_cadena_l1_y_una_cadena_l2_prefijo0","PruebaArbolTrie","PruebaArbolTrie.html#method-i-test_una_cadena_l1_y_una_cadena_l2_prefijo0","()",""],["test_una_cadena_l2","PruebaArbolTrie","PruebaArbolTrie.html#method-i-test_una_cadena_l2","()",""],["test_una_cadena_l3_una_cadena_l3_espacio1_prefijo1","PruebaArbolTrie","PruebaArbolTrie.html#method-i-test_una_cadena_l3_una_cadena_l3_espacio1_prefijo1","()",""],["test_una_ocurrencia_con_contexto","PruebaBuscadorPalabras","PruebaBuscadorPalabras.html#method-i-test_una_ocurrencia_con_contexto","()",""],["test_una_ocurrencia_sin_contexto","PruebaBuscadorPalabras","PruebaBuscadorPalabras.html#method-i-test_una_ocurrencia_sin_contexto","()",""],["test_vacio","PruebaArbolTrie","PruebaArbolTrie.html#method-i-test_vacio","()",""],["test_vacio","PruebaBuscadorPalabras","PruebaBuscadorPalabras.html#method-i-test_vacio","()",""],["test_varias_ocurrencias_con_contexto","PruebaBuscadorPalabras","PruebaBuscadorPalabras.html#method-i-test_varias_ocurrencias_con_contexto","()",""],["trie","BuscadorPalabras","BuscadorPalabras.html#method-i-trie","()","<p>retorna el trie\n"],["verificar_consistencia","ArbolTrie","ArbolTrie.html#method-i-verificar_consistencia","(cadena_revisada = '')","<p>Verifica que un árbol esté bien formado\n<p><code>cadena_revisada</code> es cadena que ya se ha revisado, el nodo actual …\n"],["LICENSE","","LICENSE.html","","<p>MIT License\n<p>Copyright © 2020 Daniel Hamilton-Smith\n<p>Permission is hereby granted, free of charge, to any …\n"],["README","","README_md.html","","<p>Buscador de palabras\n<p>Busca rapidamente una serie de cadenas en un texto usando un trie.\nCada cadena por ...\n"],["Rakefile","","Rakefile.html","","<p>require “rake/testtask”\n<p>Rake::TestTask.new(:test) do |t|\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">t</span>.<span class=\"ruby-identifier\">libs</span> <span class=\"ruby-operator\">&lt;&lt;</span> <span class=\"ruby-string\">&#39;test&#39;</span>\n<span class=\"ruby-identifier\">t</span>.<span class=\"ruby-identifier\">libs</span> <span class=\"ruby-operator\">&lt;&lt;</span> <span class=\"ruby-string\">&#39;lib&#39;</span>\n<span class=\"ruby-identifier\">t</span>.<span class=\"ruby-identifier\">test_files</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"]]}}