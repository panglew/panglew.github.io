/* injecting the data into schema set up by schema.sql */
PRAGMA foreign_keys = ON;

INSERT INTO admins(username, password)
VALUES ('Weston', 'birthday');

INSERT INTO classes(class_code, class_name, description, has_projects)
VALUES ('EECS 203', 'Discrete Mathematics', 'Introduction to the mathematical foundations of computer science. 
                                             Topics covered include: propositional and predicate logic, proof 
                                             methods, set theory, functions, sequences and summations, introduction 
                                             to algorithms, growth of functions and asymptotic notation, mathematical 
                                             induction, counting, pigeonhole principle, permutations and combinations, 
                                             relations and their properties, closure of relations, partial orderings, 
                                             and introduction to graph theory.', 'F'),
        ('EECS 280', 'Programming & Data Structures', 'Algorithm development and effective programming, top-down analysis, 
                                                       structured programming, testing, and program correctness. Program 
                                                       language syntax and static and runtime semantics. Scope, procedure 
                                                       instantiation, recursion, abstract data types, and parameter passing 
                                                       methods. Structured data types, pointers, linked data structures, 
                                                       stacks, queues, arrays, records, and trees.', 'T'),
        ('EECS 281', 'Data Structures & Algorithms', 'Introduction to the algorithm analysis and O-notation; Fundamental data 
                                                      structures including lists, stacks, queues, priority queues, hash tables, 
                                                      binary trees, search trees, balanced, trees, and graphs; searching and 
                                                      sorting algorithms; recursive algorithms; basic graph algorithms; introduction 
                                                      to greedy algorithms and divide and conquer strategy. Several programming 
                                                      assignments.', 'T'),
        ('EECS 370', 'Computer Organization', 'Basic concepts of computer organization and hardware. Instructions executed by a 
                                               processor and how to use these instructions in simple assembly-language programs. 
                                               Stored-program concept. Data-path and control for multiple implementations of a 
                                               processor. Performance evaluation, pipelining, caches, virtual memory, 
                                               input/output.', 'T'),
        ('EECS 376', 'Theory of Computation', 'An introduction to theory of computation. Models of computation: finite state machines, 
                                               Turing machines. Decidable and undecidable problems. Polynomial time computability and 
                                               paradigms of algorithm design. Computational complexity emphasizing NP-hardness. Coping 
                                               with intractability. Exploiting intractability: cryptography.', 'F'),
        ('EECS 481', 'Software Engineering', 'Pragmatic aspects of the production of software systems, dealing with structuring principles, 
                                              design methodologies and informal analysis. Emphasis is given to development of large, 
                                              complex software systems. A term project usually required.', 'F'),
        ('EECS 482', 'Operating Systems (6 cr.)', 'Operating system design and implementation: multi-tasking; concurrency and 
                                                   synchronization; inter-process communication; deadlock; scheduling; resource 
                                                   allocation; memory and storage management; input-output; file systems; protection 
                                                   and security. Students write several substantial programs dealing with concurrency 
                                                   and synchronization in a multi-task environment, with file systems, and with memory 
                                                   management.', 'T'),
        ('EECS 485', 'Web Systems', 'Concepts surrounding web systems, applications, and internet scale distributed systems. Topics 
                                     covered include client/server protocols, security, information retrieval and search engines, 
                                     scalable data processing, and fault tolerant systems. The course has substantial projects 
                                     involving development of web applications and web systems.', 'T'),
        ('EECS 489', 'Computer Networks', 'Protocols and architectures of computer networks with a specific focus on the Internet. 
                                           Topics include socket programming, naming and addressing, video streaming and content 
                                           distribution, flow and congestion control, routing, and cloud, datacenter, and software-defined 
                                           networks. Students write several substantial programs implementing protocols at different 
                                           layers of the network stack.', 'T'),
        ('EECS 494', 'Comp Game Design & Development', 'Design, development, and application of digital games. Topics include: game engines, 
                                                        design patterns, shaders and graphics programming, agile development methods, 
                                                        iterative game/ experience design, project management and resource allocation, 
                                                        virtual reality, classic games, multidisciplinary relationships, product exhibition, 
                                                        and portfolio construction. Students work in teams to develop and exhibit new games.', 'T'),
        ('EECS 498-02', 'Advanced Operating Systems', 'Advanced Operating Systems & Projects', 'F'),
        ('EECS 498(Sp. Topics)', 'Machine Learning Basics', 'This course offers a comprehensive introduction to Machine Learning and Deep Learning, 
                                                             covering essential topics such as linear and logistic regression, neural networks, 
                                                             support vector machines, clustering, and dimensionality reduction. Students will 
                                                             explore advanced concepts like deep neural networks, convolutional and recurrent 
                                                             neural networks, and their applications in object detection, facial recognition, 
                                                             and natural language processing.', 'F');

INSERT INTO projects(project_id, project_name, text, languages_and_tools, class_code)
VALUES ('280-1', 'To be changed.', 'To be changed.', 'C++', 'EECS 280'),
       ('280-2', 'To be changed.', 'To be changed.', 'C++', 'EECS 280'),
       ('280-3', 'To be changed.', 'To be changed.', 'C++', 'EECS 280'),
       ('280-4', 'To be changed.', 'To be changed.', 'C++', 'EECS 280'),
       ('280-5', 'To be changed.', 'To be changed.', 'C++', 'EECS 280'),
       ('281-1', 'To be changed.', 'To be changed.', 'C++', 'EECS 281'),
       ('281-2', 'To be changed.', 'To be changed.', 'C++', 'EECS 281'),
       ('281-3', 'To be changed.', 'To be changed.', 'C++', 'EECS 281'),
       ('281-4', 'To be changed.', 'To be changed.', 'C++', 'EECS 281'),
       ('370-1', 'To be changed.', 'To be changed.', 'C, LC2K', 'EECS 370'),
       ('370-2', 'To be changed.', 'To be changed.', 'C, LC2K', 'EECS 370'),
       ('370-3', 'To be changed.', 'To be changed.', 'C, LC2K', 'EECS 370'),
       ('370-4', 'To be changed.', 'To be changed.', 'C, LC2K', 'EECS 370'),
       ('482-1', 'To be changed.', 'To be changed.', 'C++', 'EECS 482'),
       ('482-2', 'To be changed.', 'To be changed.', 'C++', 'EECS 482'),
       ('482-3', 'To be changed.', 'To be changed.', 'C++', 'EECS 482'),
       ('482-4', 'To be changed.', 'To be changed.', 'C++', 'EECS 482'),
       ('485-1', 'To be changed.', 'To be changed.', 'Python, HTML5, CSS, Jinja2', 'EECS 485'),
       ('485-2', 'To be changed.', 'To be changed.', 'Python, HTML5, CSS, Flask, SQLite3', 'EECS 485'),
       ('485-3', 'To be changed.', 'To be changed.', 'Python, HTML5, CSS, Flask, SQLite3, JavaScript', 'EECS 485'),
       ('485-4', 'To be changed.', 'To be changed.', 'Python', 'EECS 485'),
       ('485-5', 'To be changed.', 'To be changed.', 'Python, HTML5, CSS, JavaScript', 'EECS 485'),
       ('489-1', 'To be changed.', 'To be changed.', 'C++', 'EECS 489'),
       ('494-1', 'To be changed.', 'To be changed.', 'C#, Unity', 'EECS 494');



                        